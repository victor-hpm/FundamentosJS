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


function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona
    // las dos lineas de arriba son equivalentes
    console.log(nombre.toUpperCase())
}

// function inprimirNombreYEdad(persona) {
//   var { nombre, edad } = persona
//   console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
// }

// function cumpleanos(persona) {
//     persona.edad += 1
// }
// // esto modifica el objeto  (edad)

function cumpleanos(persona) {
    return {
        ...persona
        edad: persona.edad + 1
    }
    // }
    // con esto modificamos los valores dentro de la funcion
    // pero los valos del objeto se guardan intactos en los valores generales
    // lo llamamos desde el inspector

    imprimirNombreEnMayusculas(Victor)
    imprimirNombreEnMayusculas(Esther)

    // inprimirNombreYEdad(Victor)
    // inprimirNombreYEdad(Esther)