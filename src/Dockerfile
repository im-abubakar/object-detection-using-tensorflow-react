# Use a lightweight Node.js base image
FROM node:alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json for dependency resolution
COPY package*.json ./

# Install dependencies (adjust the command if using yarn)
RUN npm install

# Copy the entire project context
COPY . .

# Create a non-root user for the application process
RUN adduser --disabled-password --shell /bin/sh appuser

# Switch to the non-root user for the build process
USER appuser

# Build the React application (adjust the command if using yarn)
RUN npm run build

# Create a new image based on nginx:alpine for serving the static content
FROM nginx:alpine

# Copy the production build artifacts from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port where the React app will be served (typically 80)
EXPOSE 80

# Set the default server block to serve the React app from the `html` directory
CMD ["nginx", "-g", "daemon off;"]
