var victor = {
    nombre: 'victor',
    apellido: 'peña',
    altura: 1.72
}

var esther = {
    nombre: 'esther',
    apellido: 'hernandez',
    altura: 1.60
}

var derek = {
    nombre: 'derek',
    apellido: 'peña',
    altura: 0.90
}

var gloria = {
    nombre: 'gloria',
    apellido: 'martinez',
    altura: 1.55
}

var chucho = {
    nombre: 'chucho',
    apellido: 'pineda',
    altura: 1.50
}

var alexis = {
        nombre: 'alexis',
        apellido: 'peña',
        altura: 0.90
    }
    // // function anonima
    // const esAlta = (persona) => {
    //     return persona.altura > 1.50
    // }
    // arrow function
const esAlta = ({ altura }) => altura > 1.50
const esBaja = ({ altura }) => altura < 1.50



var personas = [victor, esther, derek, gloria, chucho, alexis]

// var personalAltas = personas.filter(condicion la cual sera una funcion que esta arriba)
var personasAltas = personas.filter(esAlta)
    // funcion filtar filtra cada uno de los elemntos del array con la consicion que le sigue
var personasBajas = personas.filter(esBaja)

// opcion 1 masomenos 
// const pasarAlturaACms = persona => {
//     // persona.altura = persona.altura * 100
//     // persona.altura *= 100
//     return { // esto se hace para que no modifique nuestro array original
//         ...persona,
//         altura: persona.altura * 100
//     }
// }
//  opcion 2 mejor 
const pasarAlturaACms = persona => ({ // si queremos retornas este objeto tenemos que poner parentisis y llaves envolviendolo ({objeto})
    ...persona,
    altura: persona.altura * 100
})



// map nos devuelve un nuevo array modificando el array que tenemos por lo tanto tenemos que 
// moficiare y pasar un nuevo objeto con la persona desestructurada y pisaremos el atributo altura
// pero si modificamos cada uno de los elemtos esa modificacion perdurará en el array original
var personasCms = personas.map(pasarAlturaACms)


console.log(personasCms)

console.log('Las personas altas son')
console.log(personasAltas)

console.log('Las personas bajas son')
console.log(personasBajas)