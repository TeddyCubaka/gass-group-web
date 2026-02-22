FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn cache clean

COPY . .

RUN yarn install

COPY .env ./

RUN yarn prisma generate

RUN yarn migrate deploy

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]