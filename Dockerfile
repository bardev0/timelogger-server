# Base image
FROM oven/bun:1.3.5

# Set working directory
WORKDIR /app

# Copy dependency files first (better caching)
COPY package*.json ./

# Install dependencies
RUN bun install

# Copy the rest of the app
COPY . .

# Expose port (optional but recommended)
EXPOSE 3000

# Start the app
CMD ["bun", "run", "dev"]

