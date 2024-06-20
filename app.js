"use strict";

function preguntar_y_escribir(pregunta, prefijo="") {
    let respuesta = prompt(pregunta);
    if (respuesta=="" ||respuesta == null) return preguntar_y_escribir(pregunta);
    
    document.write(prefijo + respuesta);
    return respuesta;
}
preguntar_y_escribir("Cual es tu nombre?", "Bienvenido ");
let edad = preguntar_y_escribir("Cual es tu edad?", " de ");
preguntar_y_escribir("Cual es tu correo?", " años y con correo electronico ");

        if (edad >= 60) {
            document.write("<p>El ususario es adulto mayor y obtiene descuentos exclusivos</p>");
                    } else {
                        document.write("<p>El usuario no es adulto mayor</p>")
                    }
        if(edad < 18) {
            document.write("<p>El usuario es menor de edad, recibe 20% de descuento en comics y mangas</p>");
        } else{
            document.write("<p>El usuario es mayor de edad recibe 10% de descuento en Literatura Clasica</p>");
        }
        alert("Respuestas Validas");

function mostrar_imagen(cantidad) {
    document.write("<section class='container'>");
    for (let index = 1; index <= cantidad; index++) {
        document.write("<div class='image-item'>");
        document.write("<p>Libro " + index + "</p>");
        document.write("<img src='libro.jpg' alt='Imagen " + index + "'>");
        document.write("</div>");
    }
    document.write("</section>");
}
let cantidadLibros = prompt("Cuantos libros desea adquirir?");
mostrar_imagen(parseInt(cantidadLibros));
