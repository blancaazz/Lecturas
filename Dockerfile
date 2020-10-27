FROM node:15

LABEL maintainer="blanluja@gmail.com"

WORKDIR /home/test

COPY Makefile ./
COPY package*.json ./
COPY src/ ./src/
COPY test ./test/

RUN make install

#al final, para poner un usuario distinto a root
USER node
CMD ["make", "tests"]