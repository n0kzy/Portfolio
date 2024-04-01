# Étape de construction
FROM node:alpine as build

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers du projet dans le répertoire de travail du conteneur
COPY . .

# Installation des dépendances
RUN npm install

RUN npm run build

RUN npm install -g serve


# Étape de production
FROM php:8.0-apache as base

WORKDIR /var/www/html/

# Copie des fichiers construits depuis l'étape précédente
COPY --from=build /app /var/www/html/

# Exécution de la commande de build pour votre application React Native
RUN npm run build

RUN serve -s build -l 80

EXPOSE 80