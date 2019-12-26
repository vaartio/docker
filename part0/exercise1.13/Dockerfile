FROM openjdk:latest

COPY ./spring-example-project /app

WORKDIR /app

RUN ./mvnw package

EXPOSE 8080

CMD ["sh", "-c", "java -jar ./target/docker-example-1.1.3.jar"]
