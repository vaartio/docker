FROM node:10.18.0-alpine3.11

COPY ./backend-example-docker /app

WORKDIR /app

RUN npm install

EXPOSE 8000

ENV FRONT_URL=http://localhost:5000

CMD ["sh", "-c", "FRONT_URL=${FRONT_URL} npm start"]
