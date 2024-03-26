FROM node:alpine
WORKDIR /app

COPY package.json .

RUN npm install

FROM nginx:alpine as final

COPY . .

EXPOSE 3000