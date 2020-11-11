FROM node:14.14.0-alpine3.10


LABEL maintainer="blanluja@gmail.com"

#establezco el directorio de trabajo 
#para pasar los test directamente en /test:
WORKDIR /test

#copio el task runner, dependencias del projecto
#codigo fuente y tests al directorio anterior
COPY Makefile ./
COPY package*.json ./

#hacemos con el task runner una instalación del projecto
#RUN apk update && apk add make && npm -g install mocha && make install
#RUN apk update && apk add make git ssh-agent python2.7 jq1.5 && npm -g install mocha && make install
RUN apk update && apk add apt-get && npm -g install mocha && make install



#al final, para poner un usuario distinto a root
#la imagen de node tiene el usuario node como opción alternativa al root
USER node

#para que cuando se cree y ejecute, se realice la instrucción de ejecutar
#los tests
CMD ["make", "test"]