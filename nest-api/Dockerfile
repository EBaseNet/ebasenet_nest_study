# Build Stage
FROM node:20-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./
 
RUN yarn install --product

COPY . .

RUN yarn build

# Deploy Stage
FROM node:alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist

# RUN chown -R node /app/
EXPOSE 3000

ENTRYPOINT ["node", "dist/main.js"]