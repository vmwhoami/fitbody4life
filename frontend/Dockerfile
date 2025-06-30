# Stage 1: install & build
FROM oven/bun:1 AS builder
WORKDIR /app

# Copy lockfile & manifest, optimize for caching
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Copy source and build
COPY . .
RUN bun --bun run build

# Stage 2: runtime
FROM oven/bun:1-alpine AS runtime
WORKDIR /app

COPY --from=builder /app/.output ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
ENV HOST=0.0.0.0
ENTRYPOINT ["bun", "--bun", "run", ".output/server/index.mjs"]
