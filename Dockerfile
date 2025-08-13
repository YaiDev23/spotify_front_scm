# Use Node.js 20 Alpine for compatibility with Vite 7.0.0
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy source code
COPY . .

# Build arguments to pass environment variables during build
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Build the application with environment variables available
RUN yarn build --mode production

# Expose port (Railway uses PORT environment variable)
ENV PORT=4173
EXPOSE 4173

# Start the application using Railway's PORT
CMD PORT=$PORT yarn preview --host 0.0.0.0 --port $PORT
