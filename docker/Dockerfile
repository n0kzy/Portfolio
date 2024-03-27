FROM node:alpine as build

WORKDIR /usr/src/docker-react-sample

COPY package*.json ./
RUN npm install

COPY . .

FROM php:8.0-apache as base

# Copy the built React app from the previous stage
COPY --from=build /usr/src/docker-react-sample /var/www/html/

# Set the working directory
WORKDIR /var/www/html/

# Expose port 80 (port par défaut pour HTTP)
EXPOSE 80

# Define the default command to start Apache
CMD ["apache2-foreground"]
