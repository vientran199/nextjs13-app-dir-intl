FROM node:16

WORKDIR /usr/src/app

COPY ./*.json ./

RUN npm install

COPY ./*.ts ./ 

COPY  ./*.js ./

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]