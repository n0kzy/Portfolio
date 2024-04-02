FROM node:latest AS build
WORKDIR /portfolio

ADD . .

RUN cd portfolio && npm i && npm run build -- --base=/containers/patrickbrugiere-portfolio/
RUN ls
FROM nginx:latest AS server

COPY --from=build /portfolio/portfolio/dist /usr/share/nginx/html