FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

COPY . .

RUN yarn build

EXPOSE 3000

CMD ['yarn', "run", "start:prod"]