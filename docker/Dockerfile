FROM node:latest AS build
WORKDIR /portfolio

ADD . .
RUN npm i && npm run build -- --base=/containers/patrickbrugiere-portfolio/

FROM nginx:latest AS server

COPY --from=build /portfolio/ /usr/share/nginx/html