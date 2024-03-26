# Etape 1: Construire l'application ReactJS
FROM node:alpine as build
WORKDIR /app

# Copier les fichiers de l'application ReactJS dans le conteneur
COPY . ./

# Etape 2: Installer les dépendances
RUN npm install

# Etape 3: Démarrer l'application ReactJS avec npm start
CMD ["npm", "start"]