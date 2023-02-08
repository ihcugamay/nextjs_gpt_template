FROM node:19.6.0

RUN apt update -qq

RUN mkdir /app

WORKDIR /app
