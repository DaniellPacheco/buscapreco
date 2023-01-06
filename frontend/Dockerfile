FROM node:14.17.3 as client_dev

WORKDIR /buscapreco_client

COPY package.json yarn.lock ./

RUN yarn install
