"use strict";
//proyecto ecommerce local de ropa
let listaProd = [];
//supervisor puede cargar los productos a la lista
class Supervisor {
    constructor(usuS, nomS) {
        this.nombre = nomS;
        this.usuario = usuS;
    }
    //metodos
    cargarProductos(prod) {
        listaProd.push(prod);
    }
}
//instancia de una clase
const unSupervisor = new Supervisor("martaSup", "Marta Perez");
//creamos un objeto en base a un type
let producto1 = {
    marca: "pepito",
    stock: 22,
    talle: ["XS", "M", "XL"],
    colores: ["verde", "rosa"]
};
unSupervisor.cargarProductos(producto1);
