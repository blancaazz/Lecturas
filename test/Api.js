const supertest = require("supertest");
const app = require("../src/rutas.js")


describe("Llamadas al registro", function(){

    it("Deberia registrar un libro (Momo)", function(done){
        supertest(app)
            .post("/registro/libro/Momo/Michael Ende/Ha estado genial/8")
            .expect("Content-Type", /json/)
            .expect(200, {
                id: "Momo-MichaelEnde",
                nombre: "Momo",
                autora: "Michael Ende",
                comentario: "Ha estado genial",
                puntuacion: "8"
            }, done);
    })

    it("Deberia registrar un libro (La historia interminable)", function(done){
        supertest(app)
            .post("/registro/libro/La historia interminable/Michael Ende/Me ha gustado/7")
            .expect("Content-Type", /json/)
            .expect(200, {
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
        supertest(app)
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
        supertest(app)
            .get("/registro/libross")
            .expect(404, done);
    });

    //Correspondientes a la ruta /registro/libro/:id
    it("Deberia devolver información de un libro en función de su id", function(done){
        supertest(app)
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
        supertest(app)
            .delete("/registro/libro/Momo-MichaelEnde")
            .expect(200, done);
    })

    //ahora para comprobar que se ha borrado voy a hacer una nueva llamada
    //a la función que devolvía todos los libros:
    it("Debería devolver los libros", function(done){
        supertest(app)
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
