FROM ubuntu:18.04

RUN apt update \
 && apt install -y git \
 && apt install -y vim \
 && apt install -y curl \
 && curl -sL https://deb.nodesource.com/setup_10.x | bash \
 && apt install -y nodejs

RUN npm install -g typescript \
 && npm install -g nodemon \
 && npm install -g jest

COPY ./entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod a+x /usr/local/bin/entrypoint.sh

WORKDIR /app

EXPOSE 3000

CMD ["bash"]
