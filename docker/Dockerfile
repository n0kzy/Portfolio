FROM node:latest as build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

FROM php:8.0-apache

# Activer le module Apache pour la réécriture d'URL
RUN a2enmod rewrite

# Copier les fichiers construits à partir de l'étape de construction
COPY --from=build /app/build /var/www/html

# Définir le répertoire de travail
WORKDIR /var/www/html

# Décommenter la ligne ci-dessous si vous avez besoin de configurer des variables d'environnement spécifiques pour votre application React
# ENV REACT_APP_CUSTOM_VARIABLE=Valeur_custom

# Exposer le port 80 (port par défaut pour HTTP)
EXPOSE 80

# Démarrer Apache une fois le conteneur lancé
CMD ["apache2-foreground"]
