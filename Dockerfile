FROM node:alpine

RUN mkdir /var/www/app
RUN npm install -g pm2
WORKDIR /var/www/app

COPY ./package*.json /var/www/app

RUN npm install --production
COPY . /var/www/app

RUN npm run build

ENV PORT=3000
ENV NODE_ENV=production

EXPOSE 3000

USER node

CMD ["pm2-runtime", "npm", "--", "start"]
