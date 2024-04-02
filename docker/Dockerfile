FROM node:latest AS build
WORKDIR /portfolio

ADD . .

RUN cd portfolio && npm i && npm run build -- --base=/containers/patrickbrugiere-portfolio/

FROM nginx:latest AS server
RUN ls && ls portfolio && ls portfolio/build
COPY --from=build /portfolio/portfolio/build /usr/share/nginx/html