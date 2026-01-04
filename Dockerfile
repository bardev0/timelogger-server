FROM oven/bun:1.3.5

WORKDIR /app

# Copy dependency files first
COPY package.json ./

COPY timelogger-types /timelogger-types

WORKDIR /timelogger-types

RUN bun run build-types

WORKDIR /app

RUN bun add /timelogger-types

# Install dependencies
RUN bun install

# Copy app source
COPY . .

CMD ["bun", "run", "dev"]
