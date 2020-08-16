var victor = {
    nombre: 'victor',
    apellido: 'Peña',
    edad: 27,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

var derek = {
    nombre: 'derek',
    apellido: 'Peña',
    edad: 2
}

const MAYORIA_DE_EDAD = 18
    // POR SER CONSTANTES SE DECLARA CONST Y EN MAYUSCULAS SEPARADAS CON _

// a)
// // funcion anonima
// var esMayorDeEdad = function(persona) {
//     return persona.edad >= MAYORIA_DE_EDAD
// }
// b)
// // arrow function 1
// const esMayorDeEdad = (persona) => {
//     return persona.edad >= MAYORIA_DE_EDAD
// }
// c)
// arrow function con un solo parametro, podemos obviar los parentesis
// si una funcion lu unico que hace es retornar algo podemos borrar el 
// return, lo podemos borrar y borrar las llaves que rodean al cuarpo de la 
// // funcion

// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

//  y por ultimo podemos desestructurar el parametro ya que solo nos 
//  intereza la edad de la persona. para desentructuar ponemos parentesis 
// y llaves, y edad que es lo que nos intereza y de esta manera es una funcion
// que le pasaremos un objeto que tiene una edad y nos retornara si esa edad 
// es mayor a la MAYORIA_DE_EDAD

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD


function MayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }

}


function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    }
}
// ! ESTE SIGNO NEGARA LA CONDICION QUE LE SIGA ( SI NO ES MAYOR DE EDAD)

MayorDeEdad(victor)
MayorDeEdad(derek)
permitirAcceso(victor)
permitirAcceso(derek)