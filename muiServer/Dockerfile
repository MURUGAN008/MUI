FROM node:18

# Create app directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy dependency files first (for Docker cache)
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy source code
COPY . .

# Expose backend port
EXPOSE 3000

# Start server
CMD ["node", "server.js"]
