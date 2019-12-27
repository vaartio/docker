FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl

COPY . .
RUN chmod +x ./script.sh

CMD ["./script.sh"]
