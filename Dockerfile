# Step 1: Build the builder stage to install dependencies and build the apps

# Use an official Node.js image as the base
FROM node:18-alpine AS builder

# Set the working directory to /app
WORKDIR /app

# Copy the entire repo into the Docker image
COPY . .

# Install the dependencies and build the project
RUN npm install --legacy-peer-deps  # Use --legacy-peer-deps to handle npm workspace issues
RUN npm run build  # Assuming you have a "build" script to build all apps

# Step 2: Create the runner stage for the production environment

FROM node:18-alpine AS runner

# Set the working directory for the production stage
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app /app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Install only the necessary production dependencies (optional)
RUN npm prune --production

# Expose the port the app will run on
EXPOSE 3000  

# Start the Next.js app (change the command if needed)
CMD ["npm", "start"]
