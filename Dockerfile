FROM node:lts

WORKDIR /usr/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY ./server/ ./server/
COPY ./src/ ./src/

EXPOSE 3000

CMD node ./server/app.js
