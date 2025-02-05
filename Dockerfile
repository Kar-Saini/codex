
FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps  # Use --legacy-peer-deps to handle npm workspace issues
RUN npm run build  # Assuming you have a "build" script to build all apps


FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app /app

ENV NODE_ENV=production

RUN npm prune --production

EXPOSE 3000  

CMD ["npm", "start"]
