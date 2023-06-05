FROM node:latest
WORKDIR /code
COPY . /code

RUN npm ci

RUN npm install webpack-dev-server -g && \
    npm install -g http-server

RUN npm run build && \
    cd dist && \    
    http-server -p 3000