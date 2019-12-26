FROM ubuntu

RUN apt-get update \
 && apt-get install -y curl \
 && curl -sL https://deb.nodesource.com/setup_10.x | bash \
 && apt install -y nodejs

COPY ./frontend-example-docker /app

WORKDIR /app

RUN npm install

EXPOSE 5000

ENV API_URL=/api

CMD ["sh", "-c", "API_URL=${API_URL} npm start"]
