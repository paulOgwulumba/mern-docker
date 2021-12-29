FROM node:17.0.1

WORKDIR /docker-image

COPY . .

RUN npm install

EXPOSE 3000:3000

CMD ["npm", "start"]