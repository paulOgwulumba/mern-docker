FROM node:17.0.1

WORKDIR /docker-image

COPY . .

RUN npm install

EXPOSE 5000:5000

CMD ["npm", "start"]