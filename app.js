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


 //document.write("Bienvenidos a la Libreria Universal, donde encontraras tus libros favoritos,             ")
        //let nombredeCliente = " ";
        //nombredeCliente = prompt("Cual es tu nombre");
        //let correoElectronico = "";
        //correoElectronico = prompt("Cual es tu correo electronico");
        //document.write("Hola " + nombredeCliente + " con correo eletronico " + correoElectronico);
        //const edad = parseInt(prompt("Cual es tu edad?"));
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