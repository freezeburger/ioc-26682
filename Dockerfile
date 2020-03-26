FROM node:12.16.1-buster as base-image
RUN apk udpate
RUN apk add --no-cache git

FROM base-image as ionic-installer
RUN npm install -g @ionic/cli

FROM ionic-installer as dev-utilies
WORKDIR /application/
RUN echo ls -la