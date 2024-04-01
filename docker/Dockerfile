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
FROM node:alpine

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers construits depuis l'étape précédente
COPY --from=build /app /app

# Exécution de la commande de build pour votre application React Native
RUN npm run build

EXPOSE 80

CMD serve -s build -l 80
