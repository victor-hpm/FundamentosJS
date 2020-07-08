var contador = 0

const llueve = () => Math.random() < 0.25 //arrow function



do {
    // contador += 1
    contador++

} while (!llueve())

if (contador === 1) {
    console.log(`Fui a ver si llovia ${contador} vez`)
} else {
    console.log(`Fui a ver si llovia ${contador} veces`)
}