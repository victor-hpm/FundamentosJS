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

var personas = [victor, esther, derek, gloria, chucho, alexis],

    // var personalAltas = personas.filter(condicion la cual sera una funcion que esta arriba)
    personasAltas = personas.filter(esAlta),
    // funcion filtar filtra cada uno de los elemntos del array con la consicion que le sigue
    personasBajas = personas.filter(esBaja)

console.log('Las personas altas son')
console.log(personasAltas)

console.log('Las personas bajas son')
console.log(personasBajas)