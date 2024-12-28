# Use Node.js as the base image
FROM node:18-alpine AS base

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire app code
COPY . .

# Stage for building the React Remix app
FROM base AS build
RUN npm run build

# Final stage for running the app and json-server
FROM node:18-alpine

# Set working directory for the final image
WORKDIR /app

# Copy built Remix app and dependencies from the build stage
COPY --from=build /app /app

# Install global dependencies for json-server
RUN npm install -g json-server

# Expose necessary ports for Remix (5173) and json-server (3000)
EXPOSE 5173 3000

# Add a startup script for both Remix and json-server
COPY ./startup.sh /app/startup.sh
RUN chmod +x /app/startup.sh

# Set the default command to run the startup script
CMD ["sh", "./startup.sh"]
