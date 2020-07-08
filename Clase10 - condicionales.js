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

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero) {
        console.log('Ingeniero')
    } else {
        console.log('No es Ingeniero')
    }

    if (persona.coninero) {
        console.log('Cocinero')
    } else {
        console.log('No es Cocinero')
    }

    if (persona.cantante) {
        console.log('Cantante')
    } else {
        console.log('No es Cantante')
    }

    if (persona.dj) {
        console.log('Dj')
    } else {
        console.log('No es Dj')
    }

    if (persona.guitarrista) {
        console.log('Guitarrista')
    } else {
        console.log('No es Guitarrista')
    }

    if (persona.drone) {
        console.log('Piloto de drone')
    } else {
        console.log('No es Piloto de drone')
    }
}

function MayorDeEdad(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.edad >= 18) {
        console.log('Mayor de edad')
    } else {
        console.log('Menor de edad')
    }

}


imprimirProfesiones(victor)

MayorDeEdad(victor)