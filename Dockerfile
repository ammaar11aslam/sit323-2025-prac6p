# Use base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app files
COPY . .

# Expose app port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
