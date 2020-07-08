// closures es una function que recuerda el estado de las cosas cuando fue invocada

function crearSaludo(finalDeFrase) { // esta funcion nos retorna otra fucion, generadora de otras funciones
    return function(nombre) { //esta funcion recuerda el finalDeFrase al momento de ejecutarse en los tres casos
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('guey')
const saludoColombiano = crearSaludo('pana')

saludoArgentino('victor')
saludoMexicano('victor')
saludoColombiano('victor')