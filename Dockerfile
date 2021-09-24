FROM node:alpine

RUN mkdir /app
RUN npm install -g pm2
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install --production
COPY . /app

RUN npm run build

ENV PORT=3000
ENV NODE_ENV=production
ENV NEXT_PUBLIC_GOOGLE_ANALYTICS=G-LPX5MR5D52

EXPOSE 3000

USER node

CMD ["pm2-runtime", "npm", "--", "start"]
