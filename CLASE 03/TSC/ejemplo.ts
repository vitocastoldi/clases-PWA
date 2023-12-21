//proyecto ecommerce local de ropa

type Producto={
    marca:string,
    stock:number
    talle:string[]
    colores:string[]
}
let listaProd:Producto[]=[];

//supervisor puede cargar los productos a la lista

class Supervisor{
    //atributos
    usuario:string
    nombre:string
    constructor(usuS:string,nomS:string){
        this.nombre=nomS
        this.usuario=usuS 
    }
    //metodos

    cargarProductos(prod:Producto){
        listaProd.push(prod)
    }
}

//instancia de una clase
const unSupervisor=new Supervisor("martaSup", "Marta Perez")

//creamos un objeto en base a un type
let producto1:Producto={
    marca:"pepito",
    stock:22,
    talle:["XS","M","XL"],
    colores:["verde","rosa"]
}

unSupervisor.cargarProductos(producto1)