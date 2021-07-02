# For Java 8, try this
# FROM openjdk:8-jdk-alpine

# For Java 11, try this
FROM adoptopenjdk/openjdk11:alpine-jre

# Refer to Maven build -> finalName
ARG JAR_FILE=target/task-management-0.0.1-SNAPSHOT.jar

RUN pwd

# cd /opt/app
WORKDIR /opt/app


COPY ${JAR_FILE} /opt/app/task-management.jar


# java -jar /opt/app/app.jar
ENTRYPOINT ["java","-jar","task-management.jar"]