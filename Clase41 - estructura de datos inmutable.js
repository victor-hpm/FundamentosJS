// permiten deshacernos del efecto de lado

const victor = {
    nombre: 'Victor',
    apellido: 'Peña',
    edad: 27
}

// const cumpleaños = persona => persona.edad++ aumenta un año cada ves que la invocamos


const cumpleañosInmutable = persona => ({ // nos devuelve un nuevo ojeto de js en el que desglosamos a la persona
    ...persona, //desglosamos a la persona, agarramos cada uno de sus atributos y los ponemos en este nuevo objeto con el valor que corresponda
    edad: persona.edad + 1 // pisamos su edad 
})