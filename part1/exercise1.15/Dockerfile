FROM ubuntu

RUN apt-get update \
 && apt-get install -y curl \
 && curl -sL https://deb.nodesource.com/setup_10.x | bash \
 && apt install -y nodejs

COPY ./app /app

WORKDIR /app

EXPOSE 3000

RUN npm install

CMD ["sh", "-c", "npm start"]
