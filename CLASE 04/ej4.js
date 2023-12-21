"use strict";
//dos actores en este sistema : La Recepción (Sandra y Julian ) ; y la Veterinaria (Alejandra).
//manejo de pacientes (perros y gatos)
// class : Recepcion  
/*
funciones - metodos
    -Ingresar pacientes a la lista de espera
    -Agregar un paciente con su información a la lista del historial de pacientes
    -Cobrar la consulta

*/
//class : Veterinaria
/*
funciones - metodos
    - Sacar los pacientes de la lista
    - Agregar información al objeto del paciente
    - Indicar lo que se debe facturar

*/
//Objeto -> type y a partir de ello el objeto
/*
- NombreAnimal(string)
- Tipo(perro o gato :string)
- Raza(string)
- Dueño(string)
- AñoDeIngreso(number)
- Notas(string)
- VacunasAplicadas(array de strings)
*/
/*Para crear la instancia de recepcionista y veterinaria usamos la info que esta al final del pdf */
let pacientesPorAtender = [];
const historialP = [];
let gastosPaciente = [];
//molde superclase
class PersonaVete {
    constructor(edadR, usuarioR, correoR) {
        this.edad = edadR;
        this.usuario = usuarioR;
        this.correo = correoR;
    }
}
//molde
class Recepcion extends PersonaVete {
    constructor(edadR, usuarioR, correoR, diasDeTrabajoR) {
        super(edadR, usuarioR, correoR);
        this.diasDeTrabajo = diasDeTrabajoR;
    }
    //metodos(funciones)
    ingresarPaciente(paciente) {
        pacientesPorAtender.push(paciente);
    }
    agregarPacienteHistorial(paceinte) {
        historialP.push(paceinte);
    }
    cobrarConsulta(id, consulta = 1000) {
        let total = 0;
        let paciente = historialP.find((animal) => animal.idAnimal === id);
        if (paciente !== undefined) {
            let cantMedicamento = paciente.medicacion.length;
            if (cantMedicamento !== 0) {
                total = cantMedicamento * 800;
            }
            total = total + consulta;
            console.log("el total a pagar es de: $" + total);
            paciente.medicacion = [];
        }
    }
}
class Veterinaria extends PersonaVete {
    //atributos - propiedades --> subclase de PersonaVete, toma los atributos de dicha superclase
    constructor(edadR, usuarioR, correoR) {
        super(edadR, usuarioR, correoR);
    }
    //metodos- funciones
    atenderPaciente(paciente) {
        let pacienteAtendido = pacientesPorAtender.find((pac) => pac === paciente);
        if (pacienteAtendido !== undefined) {
            let indice = pacientesPorAtender.indexOf(pacienteAtendido);
            pacientesPorAtender.splice(indice, 1);
        }
        /*
        let nuevaLista=pacientesPorAtender.filter((pac)=>pac !==paciente);
        pacientesPorAtender=nuevaLista
        */
    }
    agregarInfo(id, propiedadPaciente, info) {
        //busquemos en el paciente 
        let paciente = historialP.find((animal) => animal.idAnimal == id);
        //si lo encuentra,modificamos la informacion
        if (paciente !== undefined) {
            //paciente.propiedadPaciente = info;
            switch (propiedadPaciente) {
                case "nombreAnimal":
                    paciente.nombreAnimal = info;
                    break;
                case "tipo":
                    paciente.tipo = info;
                    break;
                case "raza":
                    paciente.raza = info;
                    break;
                case "propietario":
                    paciente.propietario = info;
                    break;
                case "ingreso":
                    paciente.ingreso = info;
                    break;
                case "notas":
                    paciente.notas = info;
                    break;
                default:
                    paciente.vacunasAplicadas.push(info);
                    break;
            }
            /* if(propiedadPaciente === "vacunasAplicadas"){
               paciente.vacunasAplicadas.push(info);
             }else{
             paciente[propiedadPaciente]=info //a typescript no le gusto la antigua manera de llamar propiedades de Objetos como parametros de tipo string
            }*/
        }
        else {
            console.log("no se encuentra el paciente en el historial");
        }
    }
    indicarGastoExtra(listaMed, id) {
        let paciente = historialP.find((animal) => animal.idAnimal === id);
        if (paciente !== undefined) {
            paciente.medicacion.push(...listaMed);
        }
        gastosPaciente = [...listaMed]; //alternativa utilizando distructing
        /* alternativa
        listaMed.forEach((meddicacion)=>{
            gastosPaciente.push(meddicacion)
        })*/
    }
}
// ------------------------------------------------------------------------------------------------------------------------------------
const recepSandra = new Recepcion(40, "sandraOtaz", "sandraotraz@Recepcion.com", ["Lunes", "Miercoles", "Viernes"]);
//console.log(recepSandra)
//ejecucion metodos de Recepcion
recepSandra.ingresarPaciente("Michigan");
//console.log(pacientesPorAtender)
const animal1 = {
    idAnimal: 2,
    nombreAnimal: "Michifus",
    tipo: "Gato",
    raza: "Alguna",
    propietario: "Juanito",
    ingreso: 2022,
    notas: "primera visita",
    vacunasAplicadas: ["vacuna3"],
    medicacion: []
};
const animal2 = {
    idAnimal: 3,
    nombreAnimal: "Chicho",
    tipo: "Perro",
    raza: "Mestizo",
    propietario: "Laura",
    ingreso: 2018,
    notas: "ninguna...",
    vacunasAplicadas: ["antirabia"],
    medicacion: [""]
};
recepSandra.agregarPacienteHistorial({
    idAnimal: 1,
    nombreAnimal: "Michigan",
    tipo: "Perro",
    raza: "Golden",
    propietario: "Pedrita",
    ingreso: 2020,
    notas: "ninguna...",
    vacunasAplicadas: ["vacuna1", "antirabia"],
    medicacion: []
});
recepSandra.agregarPacienteHistorial(animal1);
//console.log(historialP)
//let cantidad:number=gastosPaciente.length
//recepSandra.cobrarConsulta(cantidad)
//Instancia de la Veterinaria
const veteAle = new Veterinaria(52, "alejandraRuiz", "alejandraruiz@veterinaria.com");
//console.log(veteAle)
veteAle.atenderPaciente("Firulais");
//console.log(pacientesPorAtender)
veteAle.agregarInfo(2, 'raza', "egipcio");
//console.log(historialP)
veteAle.indicarGastoExtra(["medicamento1", "medicamento2"], 2);
console.log(gastosPaciente);
//prueba de ejecucion de cobro con emdicamentos
recepSandra.cobrarConsulta(2);
