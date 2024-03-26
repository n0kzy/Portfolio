FROM node:alpine as build
COPY ./portfolio/public/ /var/www/html/
WORKDIR /var/www/html/

RUN npm install
RUN npm start build

FROM php:8.0-apache
COPY --from=build /app/build /var/www/html
EXPOSE 80