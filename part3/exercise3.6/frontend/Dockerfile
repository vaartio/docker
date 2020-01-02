FROM node:10.18.0-alpine3.11 as base

COPY ./frontend-example-docker /app

WORKDIR /app

RUN npm install && npm run build && rm -rf /app/src

FROM node:10.18.0-alpine3.11 as build

COPY --from=base /app /app

RUN npm install -g serve \
    && useradd -m app \
    && chown -R app:app /app/

USER app

WORKDIR /app

EXPOSE 5000

ENV API_URL=/api

CMD ["sh", "-c", "API_URL=${API_URL} serve -s -l 5000 dist"]
