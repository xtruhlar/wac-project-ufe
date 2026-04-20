### compilation stage
FROM node:latest AS build

RUN mkdir /build
WORKDIR /build

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

### we will use polyfea/spa_base as the base image for our
### "BackEnd for (micro)FrontEnd" pattern
FROM ghcr.io/polyfea/spa-base

COPY --from=build /build/www /spa/public

ENV OTEL_SERVICE_NAME=milung-ambulance-ufe
ENV SPA_BASE_PORT=8080
EXPOSE 8080

# docker build -t wac-project-ufe -f build/docker/Dockerfile . 
# docker run -p 8000:8080 --name wac-project-ufe-server wac-project-ufe
# docker rm -f wac-project-ufe-server
# docker tag wac-project-ufe davidtruhlar7/wac-project-ufe:latest
# docker login
# docker push davidtruhlar7/wac-project-ufe:latest
