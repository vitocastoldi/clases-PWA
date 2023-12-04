"use strict";
//OBJETOS
const nombre = "Juan";
//Crear el objeto en base a ese molde
const remera = {
    marca: "Pepito",
    stock: 56,
    talle: ["XS", "M", "L"],
    colores: ["rojo", "azul", "verde"],
    colceccion: "verano" //compara con elmolde "Indumentaria" y como tiene la opcion optativa "?" no tira error, aunque otro objeto como pantalon no lo tenga
};
const pantalon = {
    marca: "Zara",
    stock: 79,
    talle: ["XS", "L"],
    colores: ["rojo", "azul", "verde"]
};
const alumno1 = {
    nombre: "Juan",
    apellido: "Perez",
    email: "juan@perez.com",
    descuento: true,
};
const alumno2 = {
    nombre: "Pedro",
    apellido: "Lopez",
    email: "pedro@lopez.com",
    descuento: false,
    direccion: {
        localidad: "Munro",
        calle: "Francia",
        altura: 443,
    }
};
const listaAlumn = []; //una lista que solo permita objetos de tipo alumno
listaAlumn.push(alumno1, alumno2);
//listaAlumn.push({nombre:"Ana"}) //limitar que tipo de objetos agregar a una lista
