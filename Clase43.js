// ¿
// cuando hace falta poner el punto y como al final de uan lines en JS ?

//     El punto y como es opcional en JS, excepto en algunos SVGPathSegCurvetoQuadraticSmoothAbs


// 1
// al comenzar la proxima linea con un Array
console.log('hola mis nombre es victor');
[1, 2, 3].forEach(n => console.log(n * 2))




// 2
// al comenzar la proxima linea con un template String
const nombre = 'victor'
console.log('hola mi nombre es Victor');
`${nombre} es desarrollador`






// 3 despues de return debe de seguir la llave no debe de haber un enter despues del return porque lo toma como un ;
function calcularDoble(numero) {
    return {
        original: numero,
        doble: numero * 2
    }
}