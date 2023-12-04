
/* moldes-- superclase */

class Persona {

    nombre:string;
    apellido:string;
    edad:number;
    dni:number;
    nacionalidad:string;

    constructor(nombre:string,apellido:string,edad:number,dni:number,){
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.dni=dni
        this.nacionalidad="Argentina"
    }

    saberDNI(){
        console.log("su DNI es: "+this.dni)
    }

    private calcularPrecio(listaPrecio:number[]){
        let total=0
        for(let precio of listaPrecio){
            total=total+precio
        }
        return total
    }

    public indicarTotal(listaPrecio:number[]){
        let totalApagar= this.calcularPrecio(listaPrecio)
        alert("debe pagar "+totalApagar)
    }
}


/* molde ---  subclase */

class Recepcion extends Persona{

    usuario:string
    //constructor en herencia (subclase), uso super()
    constructor(nombreP:string,apellidoP:string,edad:number,dni:number,usuarioR:string){
        super(nombreP,apellidoP,edad,dni)//traemos estos atributos de la clase persona
        this.usuario=usuarioR
    }


    registrarPaciente(paciente:any){
        console.log("la recepcion de nombre "+this.nombre+" registra pacientes "+paciente)
    }

    cobrarPaciente(){
        console.log("proceso de cobro")
    }
}


class Medico extends Persona{
    cargaFichaPaciente(){
        console.log("ingresa datos del paciente y lo atiende...")
    }
}

//instancia de una clase ----> objeto que hacemos a partir de una clase
const unaPersona= new Persona("Ana","Gomez",33,1111111)
const otraPersona= new Persona("Juan","Perez",22,222222)

const recepcionistaSemana= new Recepcion("Marta","Recepcion",66,7777,"marta@recepcion.com")

const medico= new Medico("Julia","Ruiz",22,4444444)
//console.log(unaPersona)
//console.log(otraPersona)
//console.log(recepcionistaSemana)
recepcionistaSemana.registrarPaciente("Un paciente")
console.log(recepcionistaSemana.dni)



// modificadores de acceso
//usar atributos como metodos
//se aplican en clases
//permiten o impidesn (private o public) que la instancia tenga acceso a esa info o esa accion o metodo.
// impiden que se puedan cambiar los atributos (readonly)
//