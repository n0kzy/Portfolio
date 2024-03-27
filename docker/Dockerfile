
FROM php:8.0-apache as base
COPY . /var/www/html/
WORKDIR /var/www/html/
COPY package.json /var/www/html/

RUN npm install

COPY . /var/www/html/

CMD ["npm", "start"]

EXPOSE 3000
