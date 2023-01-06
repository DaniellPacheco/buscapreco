FROM node:14.17.3 as api_dev

WORKDIR /buscapreco_api

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 6868

FROM api_dev as production

ENV NODE_PATH=./dist

RUN yarn build
