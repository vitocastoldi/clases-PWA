//OBJETOS


const nombre:string="Juan";

//molde del objeto -> instancia que es el objeto


//Molde ---> el molde solo lo crea en TYPESCRIPT y al compilarlo solo pasa los objetos creados con el molde

type Indumentaria={
    marca:string,
    stock:number
    talle:string[]
    colores:string[]
    colceccion?:string  // creo una opcion optativa"?"
}

//Crear el objeto en base a ese molde

const remera:Indumentaria={
    marca:"Pepito",
    stock: 56 ,
    talle:["XS","M","L"],
    colores:["rojo","azul","verde"],
    colceccion:"verano"//compara con elmolde "Indumentaria" y como tiene la opcion optativa "?" no tira error, aunque otro objeto como pantalon no lo tenga
}

const pantalon:Indumentaria={
    marca:"Zara",
    stock: 79 ,
    talle:["XS","L"],
    colores:["rojo","azul","verde"]
}

//Lista de alumnos de un curso

type   Direccion={
    localidad:string,
    calle:string,
    altura:number, 
}

type Alumno={
    nombre:string,
    apellido:string,
    email:string,
    descuento:boolean,
    direccion?:Direccion,
}

const alumno1:Alumno={
    nombre:"Juan",
    apellido:"Perez",
    email:"juan@perez.com",
    descuento:true,
    
}

const alumno2:Alumno={
    nombre:"Pedro",
    apellido:"Lopez",
    email:"pedro@lopez.com",
    descuento:false,
    direccion:{
        localidad:"Munro",
        calle:"Francia",
        altura:443,
    }
}


const listaAlumn : Alumno[]=[];//una lista que solo permita objetos de tipo alumno

listaAlumn.push(alumno1,alumno2)
//listaAlumn.push({nombre:"Ana"}) //limitar que tipo de objetos agregar a una lista

//con TYPE creamos el molde (primera letra en mayuscula)
//creamos el objeto en base a ese molde