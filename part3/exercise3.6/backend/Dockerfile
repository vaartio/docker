FROM node:10.18.0-alpine3.11 as base

COPY ./backend-example-docker /app

WORKDIR /app

RUN npm install && npm run build && rm -rf /app/src

FROM node:10.18.0-alpine3.11 as build

COPY --from=base /app /app

RUN npm install -g serve \
    && useradd -m app \
    && chown -R app:app /app/

USER app

WORKDIR /app

EXPOSE 8000

ENV FRONT_URL=http://localhost:5000

CMD ["sh", "-c", "FRONT_URL=${FRONT_URL} serve -s -l 5000 dist"]
