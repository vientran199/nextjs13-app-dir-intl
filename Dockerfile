#build stage
FROM node:19-alpine as BUILD_IMAGE

WORKDIR /usr/src/app

COPY ./*.json ./

RUN npm install

#copy tất cả trừ những thứ được liệt kê ở .dockerignore
COPY . . 

RUN npm run build

#production stage
FROM node:19-alpine as PRODUCTION

WORKDIR /usr/src/app

COPY --from=BUILD_IMAGE ./usr/src/app/package*.json ./
COPY --from=BUILD_IMAGE ./usr/src/app/.next ./.next
COPY --from=BUILD_IMAGE ./usr/src/app/public ./public
COPY --from=BUILD_IMAGE ./usr/src/app/node_modules ./node_modules

ENV NODE_ENV=Production

EXPOSE 3000

CMD ["npm", "start"]