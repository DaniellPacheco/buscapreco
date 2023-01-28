FROM node:19-alpine as api_dev

WORKDIR /buscapreco_api

RUN apk add chromium

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn prisma generate

EXPOSE 6868

FROM api_dev as production

ENV NODE_PATH=./dist

RUN yarn build
