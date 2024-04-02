FROM node:latest AS build
WORKDIR /portfolio

ADD . .
RUN ls
RUN cd portfolio && npm i && npm run build -- --base=/containers/patrickbrugiere-portfolio/

FROM nginx:latest AS server

COPY --from=build /portfolio/dist /usr/share/nginx/html