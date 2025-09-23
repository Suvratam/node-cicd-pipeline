# Use Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY node_web_app/package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY node_web_app/ ./

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "app.js"]

