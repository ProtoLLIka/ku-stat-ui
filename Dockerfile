FROM node:latest
WORKDIR /code
COPY . /code

RUN npm ci && \
    npm cache clean --force

RUN npm install webpack-dev-server -g

