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


function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}


function MayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }

}

MayorDeEdad(victor)
MayorDeEdad(derek)