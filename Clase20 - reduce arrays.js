var victor = {
    nombre: 'victor',
    apellido: 'peña',
    altura: 1.72,
    cantidadDeLibros: 25
}

var esther = {
    nombre: 'esther',
    apellido: 'hernandez',
    altura: 1.60,
    cantidadDeLibros: 25

}

var derek = {
    nombre: 'derek',
    apellido: 'peña',
    altura: 0.90,
    cantidadDeLibros: 25

}

var gloria = {
    nombre: 'gloria',
    apellido: 'martinez',
    altura: 1.55,
    cantidadDeLibros: 25

}

var chucho = {
    nombre: 'chucho',
    apellido: 'pineda',
    altura: 1.50,
    cantidadDeLibros: 25

}

var alexis = {
    nombre: 'alexis',
    apellido: 'peña',
    altura: 0.90,
    cantidadDeLibros: 25

}

var personas = [victor, esther, derek, gloria, chucho, alexis]


// cuenta total de todos lo librsoq ue se tienen entre todos

// opcion 1 con un ciclo for

// var acumulador = 0

// for (var i = 0; i < personas.length; i++) {
//     acumulador = acumulador + personas[i].cantidadDeLibros
// }

// console.log(`En total todos tienen ${acumulador} libros`)

// opcion 2 con reduce

// funcion anonima
// const reducer = (acumulador, cada uno de los elentos)
// const reducer = (acum, personas) => {
//   // modificar el valor que queremos que tenga el nuevo acumulador 
//   // retornamos acum que es el valor que se incrementara cada vez que llame al reducer
//   // mas personas.cantidadDeLibros
//   return acum + personas.cantidadDeLibros
// }

// const reducer = (acum, personas) => acum + personas.cantidadDeLibros
// porque solo retprna ese vaor quitamos llaves  y el return y solo nos intereza la cantidadDeLibros
// de libros y quitamos personas de personas.cantidadDeLibros y ponemos cantidad de libros 
// en el lugar donde esta personas dentos del parentesis

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

// var totalDeLibros = personas.reduce(funcion, valor inicial del acumulador)
var totalDeLibros = personas.reduce(reducer, 0)


console.log(`En total todos tienen ${totalDeLibros} libros`)