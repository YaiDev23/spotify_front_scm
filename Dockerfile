# Use Node.js 20 Alpine for compatibility with Vite 7.0.0
FROM node:20-alpine

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy source code
COPY . .

# Build arguments to pass environment variables during build
#ARG VITE_API_URL
#ARG NODE_ENV=production

# Set environment variables for build
#ENV VITE_API_URL=$VITE_API_URL
#ENV NODE_ENV=$NODE_ENV

# Build the application with environment variables available
RUN yarn build

# Expose port (Railway uses PORT environment variable)
EXPOSE $PORT

# Start the application using Railway's PORT
CMD ["yarn", "start"]
