# Étape de construction
FROM node:alpine as build

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers du projet dans le répertoire de travail du conteneur
COPY . .

# Installation des dépendances
RUN npm install

# Étape de production
FROM node:alpine

# Copie des fichiers construits depuis l'étape précédente
COPY --from=build /app /app

# Exécution de la commande de build pour votre application React Native
RUN npm run build

# Exposition du port utilisé par votre application React Native
EXPOSE 3000

# Commande par défaut pour démarrer votre application React Native
CMD ["npm", "start"]
