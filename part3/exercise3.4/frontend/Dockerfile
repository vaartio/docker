FROM node:10

COPY ./frontend-example-docker /app

WORKDIR /app

RUN npm install

EXPOSE 5000

ENV API_URL=/api

CMD ["sh", "-c", "API_URL=${API_URL} npm start"]
