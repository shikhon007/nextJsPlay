FROM node:18.15.0-alpine3.17
WORKDIR /app
COPY . .
RUN npm install