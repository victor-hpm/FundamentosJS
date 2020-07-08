var victor = {
    nombre: 'Victor',
    apellido: 'Peña',
    edad: 27
}


function esMayorDeEdad(persona) {
    var mensaje // hosting, son decalraciones que conviene decalrarlas arriba "hoisting", sus valores se pueden rearignar 
    let mensaje // el alcance de la variable se reduce al bloque donde esa variable es utilizada y declarada
    const MAYORIA_DE_EDAD = 18 //nunca se puede reasignar 

    if (persona.edad >= MAYORIA_DE_EDAD) {
        mensaje = 'Es mayor de edad'
    } else {
        mensaje = 'Es menor de edad'
    }
    console.log(mensaje)
}

esMayorDeEdad(victor)


// Lo ideal es utilizar let, no var, si debemos reasignar la variable.
// Si no hay que reasignarla, lo mejor es definirla con const.
// Con esto, evitaremos bugs


// hay que reducir al minimo el alcance de nuestras variables