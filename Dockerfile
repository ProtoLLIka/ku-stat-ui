FROM node:latest
WORKDIR /code
COPY . /code


RUN npm install webpack-dev-server -g

RUN npm install --no-progress --ignore-optional
