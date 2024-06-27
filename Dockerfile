# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /src

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire React project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to start the app
CMD ["npm", "start"]
