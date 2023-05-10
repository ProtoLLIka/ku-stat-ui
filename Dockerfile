FROM node:latest
WORKDIR /code
COPY . /code


RUN npm ci

RUN npm install webpack-dev-server -g

