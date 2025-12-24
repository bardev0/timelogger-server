FROM oven/bun:1.3.5

WORKDIR /app

# Copy dependency files first
COPY package.json ./

# Install dependencies
RUN bun install

# Copy app source
COPY . .

CMD ["bun", "run", "dev"]
