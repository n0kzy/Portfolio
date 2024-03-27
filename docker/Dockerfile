FROM node:alpine

# Création du répertoire de travail dans le conteneur
WORKDIR /app

# Copie du reste des fichiers du projet dans le répertoire de travail du conteneur
COPY . .

# Installation des dépendances
RUN npm install

# Exposition du port 3000 utilisé par l'application React
EXPOSE 3000

# Commande par défaut pour démarrer l'application
CMD npm start
