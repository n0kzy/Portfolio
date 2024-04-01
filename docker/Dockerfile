# Étape de build pour construire l'application React
FROM node:alpine as build

WORKDIR /app

# Copie des fichiers du projet dans le répertoire de travail du conteneur
COPY . /app

# Installation des dépendances et construction de l'application React
RUN npm install
RUN npm run build

# Étape de production pour servir les fichiers statiques
FROM nginx:alpine

# Copie des fichiers construits dans le répertoire de travail du conteneur Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposition du port 80 utilisé par Nginx
EXPOSE 80

# Commande par défaut pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
