install:
	npm install

test:
	npm install supertest
	npm test

run: 
	node src/Registro_libros.js 

.PHONY: test