FROM node:alpine

WORKDIR /src/app
COPY package.json .
RUN npm i
COPY . .

CMD ["npm", "start"]