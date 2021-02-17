import request from "supertest";
import { italic } from "../../../../../.cache/typescript/4.1/node_modules/ansi-styles/index.js";
import { RegistroModule } from "../src/registro/registro.module.js"
import { RegistroService } from "../src/registro/registro.service"
import { AppModule } from '../src/app.module';
import { NestFactory } from '@nestjs/core';

describe("Llamadas al registro", function(){
    let app;
    beforeAll(async() => {
        app = await NestFactory.create(AppModule);
        //important pa q no de fallo ip.address no existe
        app = await app.listen(3000);
    })

    //Correspondientes a la ruta /registro/libro/:nombre/:autora/:comentario/:puntuacion
    //tener en cuenta, esta función devuelve el libro creado
    it("Deberia registrar un libro (Momo)", function(done){
        request(app)
            .post("/registro/libro/Momo/Michael Ende/Ha estado genial/8")
            .expect("Content-Type", /json/)
            .expect(201, {
                id: "Momo-MichaelEnde",
                nombre: "Momo",
                autora: "Michael Ende",
                comentario: "Ha estado genial",
                puntuacion: "8"
            }, done);
    })

    it("Deberia registrar un libro (La historia interminable)", function(done){
        request(app)
            .post("/registro/libro/La historia interminable/Michael Ende/Me ha gustado/7")
            .expect("Content-Type", /json/)
            .expect(201, {
                id: "Lahistoriainterminable-MichaelEnde",
                nombre: "La historia interminable",
                autora: "Michael Ende",
                comentario: "Me ha gustado",
                puntuacion: "7"
            }, done);
    })


    //Correspondientes a la ruta /registro/libros
    //en este caso como solo está registrado Momo, voy a poner que tendría que devolver ese
    it("Debería devolver los libros", function(done){
        request(app)
            .get("/registro/libros")
            .expect("Content-Type", /json/)
            .expect(200, [{
                id: "Momo-MichaelEnde",
                nombre: "Momo",
                autora: "Michael Ende",
                comentario: "Ha estado genial",
                puntuacion: "8"
            }, {
                id: "Lahistoriainterminable-MichaelEnde",
                nombre: "La historia interminable",
                autora: "Michael Ende",
                comentario: "Me ha gustado",
                puntuacion: "7"
            }], done);
    });

    it("No debería devolver los libros (es una ruta inexistente)", function(done){
        request(app)
            .get("/registro/libross")
            .expect("Content-Type", /json/)
            .expect(404, done);
    });

    //Correspondientes a la ruta /registro/libro/:id
    it("Deberia devolver información de un libro en función de su id", function(done){
        request(app)
            .get("/registro/libro/Momo-MichaelEnde")
            .expect("Content-Type", /json/)
            .expect(200, {
                id: "Momo-MichaelEnde",
                nombre: "Momo",
                autora: "Michael Ende",
                comentario: "Ha estado genial",
                puntuacion: "8"
            }, done);
    })

    //Correspondientes a la ruta /registro/libro/:id
    it("Deberia borrar el libro de Momo", function(done){
        request(app)
            .delete("/registro/libro/Momo-MichaelEnde")
            .expect(200, done);
    })

    //ahora para comprobar que se ha borrado voy a hacer una nueva llamada
    //a la función que devolvía todos los libros:
    it("Debería devolver los libros", function(done){
        request(app)
            .get("/registro/libros")
            .expect("Content-Type", /json/)
            .expect(200, [{
                id: "Lahistoriainterminable-MichaelEnde",
                nombre: "La historia interminable",
                autora: "Michael Ende",
                comentario: "Me ha gustado",
                puntuacion: "7"
            }], done);
    });    

});
