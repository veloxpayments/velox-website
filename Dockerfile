FROM node:20 AS base

# Install dependencies only when needed
FROM base
WORKDIR /app


# Install dependencies based on the preferred package manager
COPY package.json package-lock.json ./
RUN npm install

COPY . .
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs


EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
