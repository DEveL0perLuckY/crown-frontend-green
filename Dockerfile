FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
FROM base AS builder
WORKDIR /app
COPY . .
RUN npm run build
FROM nginx:stable-alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80