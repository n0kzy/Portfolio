# Etape 1: Construire l'application ReactJS
FROM node:alpine as build
WORKDIR /app
# Copier les fichiers de l'application ReactJS dans le conteneur
COPY . ./

# Etape 2: Installer les dépendances
RUN npm install
RUN npm start

FROM nginx:alpine as final

COPY --from=build /app/build /usr/share/nginx/html


EXPOSE 80