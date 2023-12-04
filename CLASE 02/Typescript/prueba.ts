let nombre:string ="Vito"

//dos maneras de definir type en array

let manera1:(string | boolean) []=["vito","joaco","mateo"]

//otra manera
let manera2:Array < string >=["vito","joaco","mateo"]

// any -> cualquiera
let otroDato:any="";
otroDato=32

// void -> Vacio


// Funciones 

//definimos en los parametros el tipo de dato que se va a permitir
//coloco el signo ? si es un parametro que puede como no llevar.
//variable por default variable=valor


function suma(num1:number,num2:number,num3?:any){
    console.log(num3);
    return console.log(num1+num2)
}
suma(2,5)
suma(5,8,12)