# Étape de construction
FROM node:alpine as build

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers du projet dans le répertoire de travail du conteneur
COPY . .

# Installation des dépendances
RUN npm install

# Construction de l'application ReactJS
RUN npm run build

# Installation de serve pour servir l'application
RUN npm install -g serve

# Étape de production
FROM php:8.0-apache

# Copie des fichiers construits depuis l'étape précédente
COPY --from=build /app/build /var/www/html/

# Exposition du port
EXPOSE 80

# Commande de démarrage pour servir l'application avec serve
CMD serve -s build -l 80
