var victor = {
    nombre: 'victor',
    apellido: 'peña',
    edad: 27,
    peso: 62
}

const INCREMENTO_DE_PESO = 0.2
const DIAS_DEL_ANO = 365

console.log(`Al inicio del año ${victor.nombre} pesa ${victor.peso} kg`)
    // arrow function
const aumentarDePeso = persona => persona.peso += INCREMENTO_DE_PESO
    // // function anonima
    // function aumentarDePeso (persona){
    // return persona.peso += INCREMENTO_DE_PESO
    // }
    // arrow function
const adelgazar = persona => persona.peso -= INCREMENTO_DE_PESO

// for (var i = 1; i <= 365; i++) {
// vart i=1 inicializador; condicion si cumple el codigo se ejecuta; incrementos cada ves que termina de ejecutar el codigo 
for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random()
        // numero random entre 0 y 1, es de modulo math
    if (random < 0.25) {
        //aumenta de peso
        aumentarDePeso(victor)
    } else if (random < 0.5) {
        //adelgaza 
        adelgazar(victor)
    }
}



console.log(`Al final del año ${victor.nombre} pesa ${victor.peso.toFixed(2)} kg`)
    // .toFixed(2) para que el resultado solo de dos decimales