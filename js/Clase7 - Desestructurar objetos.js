var Victor = {
    nombre: 'Victor',
    apellido: 'Peña',
    edad: 28
}

var Esther = {
    nombre: 'Esther',
    apellido: 'Hernandez',
    edad: 27
}


// function imprimirNombreEnMayusculas(persona) {
//     // var nombre = persona.nombre
//     var { nombre } = persona
//     // las dos lineas de arriba son equivalentes
//     console.log(nombre.toUpperCase())
// }

function inprimirNombreYEdad(persona) {
    var { nombre, edad } = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

// imprimirNombreEnMayusculas(Victor)
// imprimirNombreEnMayusculas(Esther)

inprimirNombreYEdad(Victor)
inprimirNombreYEdad(Esther)