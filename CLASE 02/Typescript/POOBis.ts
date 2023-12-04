class Vendedor{
    /*  CARACTERISTICAS */

    nombreV:string
    usuarioV:string
    edadV:number
    correoV:string

    /* Uso el contructor para que al crear una instancia, esta misma se cree con propiedades/caracteristicas propias. */
    constructor(nombre:string,usuario:string,edad:number,correo:string){
        this.nombreV=nombre
        this.usuarioV=usuario
        this.edadV=edad
        this.correoV=correo
    }


    /*  CAPACIDADES  */ 
    cobrar(productos:any[]){
        let total=0
        console.log("realizo una venta")
        console.log("sacar del stock lo vendido")
        productos.forEach((prod)=>{
            total = total+prod.precio
        })
        console.log("total a pagar: "+ total)

    }
    atenderCliente(){
        console.log("el vendedor "+this.nombreV+" esta atendiendo")
    }

}

let vendedoraAna= new Vendedor("Ana","anaVend",30,"ana@vend.com")
console.log(vendedoraAna)