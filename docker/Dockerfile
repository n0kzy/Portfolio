# Stage 1: Build React App
FROM node:carbon as build

# Create app directory
WORKDIR /usr/src/docker-react-sample

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# To bundle your app’s source code inside the Docker image, use the COPY instruction:
COPY . .
COPY src/ .
COPY component/ .
# Your app binds to port 3000 so you’ll use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 3000

# Stage 2: Build PHP Apache Server
FROM php:8.0-apache as base

# Copy the built React app from the previous stage
COPY --from=build /usr/src/docker-react-sample /var/www/html/

# Set the working directory
WORKDIR /var/www/html/

# Expose port 80 (port par défaut pour HTTP)
EXPOSE 80

# Define the default command to start Apache
CMD ["apache2-foreground"]