FROM node:alpine as build
WORKDIR /app
COPY portfolio/public/ ./
RUN npm install
RUN npm run build

FROM php:8.0-apache
COPY --from=build /app/build /var/www/html
EXPOSE 80