# ---------- 1) deps : installe les dépendances exactes du lockfile ----------
FROM node:24-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# ---------- 2) builder : compile Next.js en mode standalone ----------
FROM node:24-alpine AS builder
WORKDIR /app
ARG APP_VERSION=dev
ENV APP_VERSION=$APP_VERSION \
    NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---------- 3) runner : image finale minimale, utilisateur non-root ----------
FROM node:24-alpine AS runner
WORKDIR /app
ARG APP_VERSION=dev
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0 \
    APP_VERSION=$APP_VERSION
LABEL org.opencontainers.image.title="portfolio-nextjs" \
      org.opencontainers.image.version=$APP_VERSION
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nextjs /app/public ./public
USER nextjs
EXPOSE 3000
HEALTHCHECK --interval=15s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/api/health || exit 1
CMD ["node", "server.js"]
