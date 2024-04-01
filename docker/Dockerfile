# Étape de build pour construire l'application React
FROM node:alpine as build

WORKDIR /app

# Copie des fichiers du projet dans le répertoire de travail du conteneur
COPY . /app

# Installation des dépendances et construction de l'application React
RUN npm install
RUN npm run build
RUN npm install -g serve

# Étape de production pour servir les fichiers statiques
FROM nginx:alpine

# Copie des fichiers construits dans le répertoire de travail du conteneur Nginx
COPY --from=build /app/build /usr/share/nginx/html

CMD serve -s build -l 80
EXPOSE 80

# Commande par défaut pour démarrer Nginx

