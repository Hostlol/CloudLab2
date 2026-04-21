FROM node:22-alpine AS builder
WORKDIR /app
COPY watcher.js .

FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/watcher.js .

CMD ["node", "watcher.js"]