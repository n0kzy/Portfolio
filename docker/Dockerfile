# Étape de construction de l'application ReactJS
FROM node:latest as build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

# Étape de création de l'image finale avec PHP et Apache
FROM php:8.0-apache

# Activer le module Apache pour la réécriture d'URL
RUN a2enmod rewrite

# Copier les fichiers de l'application ReactJS construite dans l'image Apache
COPY --from=build /app/build /var/www/html/

# Définir le répertoire de travail
WORKDIR /var/www/html/

# Exposer le port 80 (port par défaut pour HTTP)
EXPOSE 80

# Définir la commande par défaut pour démarrer Apache une fois le conteneur lancé
CMD ["apache2-foreground"]
