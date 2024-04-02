FROM node:latest AS build
WORKDIR /portfolio

ADD . .
RUN npm i && npm run build -- --base=/containers/patrickbrugiere-portfoliodepot/

FROM nginx:latest AS server

COPY --from=build /portfolio/public /usr/share/nginx/html