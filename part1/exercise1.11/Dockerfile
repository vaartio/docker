FROM ubuntu

RUN apt-get update \
 && apt-get install -y curl \
 && curl -sL https://deb.nodesource.com/setup_10.x | bash \
 && apt install -y nodejs

COPY ./backend-example-docker /app

WORKDIR /app

RUN npm install

EXPOSE 8000

ENV FRONT_URL=http://localhost:5000

CMD ["sh", "-c", "FRONT_URL=${FRONT_URL} npm start"]
