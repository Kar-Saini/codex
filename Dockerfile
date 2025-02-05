
FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps  
RUN npm run dev  


FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app /app

ENV NODE_ENV=production

RUN npm prune --production

EXPOSE 3000  

CMD ["npm", "start"]
