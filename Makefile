install:
	npm install supertest
	npm install

test:
	npm test

run: 
	node src/Registro_libros.js 

.PHONY: test