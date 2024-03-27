FROM node:latest as build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

FROM php:8.0-apache as base
COPY . /var/www/html/
COPY --from=build /app/build /var/www/html/
WORKDIR /var/www/html/


EXPOSE 80

