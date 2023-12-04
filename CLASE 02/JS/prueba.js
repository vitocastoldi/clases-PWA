"use strict";
let nombre = "Vito";
//dos maneras de definir type en array
let manera1 = ["vito", "joaco", "mateo"];
//otra manera
let manera2 = ["vito", "joaco", "mateo"];
// any -> cualquiera
let otroDato = "";
otroDato = 32;
// void -> Vacio
// Funciones 
//definimos en los parametros el tipo de dato que se va a permitir
//coloco el signo ? si es un parametro que puede como no llevar.
//variable por default variable=valor
function suma(num1, num2, num3) {
    console.log(num3);
    return console.log(num1 + num2);
}
suma(2, 5);
suma(5, 8, 12);
