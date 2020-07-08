var victor = {
    nombre: 'victor',
    apellido: 'peña',
    edad: 27,
    peso: 62
}

const INCREMENTO_DE_PESO = 0.3
const DIAS_DEL_ANO = 365
const META = victor.peso - 3
var dias = 0

console.log(`Al inicio del año ${victor.nombre} pesa ${victor.peso} kg`)
    // arrow function
const aumentarDePeso = persona => persona.peso += INCREMENTO_DE_PESO
    // // function anonima
    // function aumentarDePeso (persona){
    // return persona.peso += INCREMENTO_DE_PESO
    // }
    // arrow function
const adelgazar = persona => persona.peso -= INCREMENTO_DE_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

while (victor.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(victor)
    }
    if (realizaDeporte()) {
        adelgazar(victor)
    }
    dias += 1
}




console.log(`Pasaron ${dias} hasta que ${victor.nombre} adelgazó 3kg`)
    // .toFixed(2) para que el resultado solo de dos decimales