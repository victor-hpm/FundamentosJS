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


function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(Victor)
imprimirNombreEnMayusculas(Esther)