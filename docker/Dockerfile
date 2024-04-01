FROM node:alpine
FROM php:8.0-apache as base

WORKDIR /var/www/html/
# Copie du reste des fichiers du projet dans le répertoire de travail du conteneur
COPY . /var/www/html/

# Installation des dépendances
RUN npm install

# Exposition du port 3000 utilisé par l'application React
EXPOSE 80

# Commande par défaut pour démarrer l'application
CMD npm start
