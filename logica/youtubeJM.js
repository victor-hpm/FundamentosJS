// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// (cadena = '') si no manda nada asignale vacio
const contarCaracteres = (cadena = '') =>
    // si la cadena de texto esta vacia
    (!cadena && typeof cadena === 'string')
    // entonces has esto
    ?
    console.warn('No ingresaste ninguna cadena')
    // si esta bien la cedena has esto
    :
    console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`)


// contarCaracteres('hola');


// function contarCaracteres(cadena = '') {

//     // (!cadena) si la cadena de texto esta vacia
//     if (!cadena) {
//         console.warn('No ingersaste ninguna cadena')
//     } else {
//         console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`)
//     }
// }

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const cortarCadena = (cadena = '', longitud = undefined) =>
    (!cadena && typeof cadena === 'string') ?
    console.warn('No ingresaste ninguna cadena') :
    (longitud === undefined) ?
    console.warn('Noingresaste la longitud para recortar el texto') :
    console.info(cadena.slice(0, longitud))

// cortarCadena('hola mundo', 4);
// cortarCadena('hola', 2);
// cortarCadena();


// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const cadenaToArreglo = (cadena = '', separador = undefined) =>
    (!cadena) ?
    console.warn('No ingresaste ninguna cadena') :
    (separador === undefined) ?
    console.warn('Noingresaste el caracter separador') :
    console.info(cadena.split(separador));

// cadenaToArreglo('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a', ' ');
// cadenaToArreglo('Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic', ',');
// cadenaToArreglo();
// cadenaToArreglo('hola mundo');

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
const repetirCadena = (cadena = '', repeticiones = undefined) => {
    if (!cadena) return console.warn('No ingresaste un texto');

    if (repeticiones === undefined) return console.warn('No ingresaste el número de repeticiones');

    if (repeticiones === 0) return console.error('El 0 no vale');

    if (Math.sign(repeticiones) === -1) return console.warn('Las repeticiones no son negativas');

    for (let i = 1; i <= repeticiones; i++) {
        console.info(`${cadena}, ${i}`);
    }
}

// repetirCadena('hola mundo', 5);
// repetirCadena('hola mundo', 0);
// repetirCadena('hola mundo', -20);
// repetirCadena('hola mundo');
// repetirCadena('', 8);


// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invertirString = (cadenaSting = '') =>
    // validaciones previas
    (!cadenaSting) // si no existe
    // utilizando operador ternario
    ?
    console.warn('No ingresaste ningun texto') :
    console.info(cadenaSting.split('').reverse().join(''));


// invertirString('hola mundo');



function invertir(cadena) {
    var x = cadena.length;
    var cadenaInvertida = "";

    while (x >= 0) {
        cadenaInvertida = cadenaInvertida + cadena.charAt(x);
        x--;
    }
    return cadenaInvertida;
}

// console.log(invertir('hola mundo'));



// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const repeticionPalabra = (cadena = '', texto = '') => {
    if (!cadena) return console.warn('No ingresaste un texto');
    if (!texto) return console.warn('No ingresaste la palabra a buscar');

    let i = 0,
        contador = 0;
    // mientras que i sea diferente de -1 ocea que indexOf encuentre 
    // coinsidencias porque cuando no encuntra regresa un -1
    while (i !== -1) {
        // i es igual a buscar dentro de cadena 
        i = cadena.indexOf(texto, i);
        //  y si i es diferente de -1 
        //  es decir si encontro coinsidencias 
        if (i !== -1) {
            i++;
            contador++;
        }
    }
    return console.info(`La palabra ${texto} se repite ${contador} veces`);
}

// repeticionPalabra('');
// repeticionPalabra('', 'hola');
// repeticionPalabra('hola mundo', '');
// repeticionPalabra('hola mundo', '');
// repeticionPalabra('hola mundo, hola bebe, hola esther', 'hola');
// repeticionPalabra('hola mundo adios mundo yolo mundo, chao mundo', 'mundo');


// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const palindromo = (palabra = '') => {
    if (!palabra) return console.warn('no ingresaste una palabra');
    palabra = palabra.toLowerCase();

    let alReves = palabra.split('').reverse().join('');
    console.log('alReves', alReves);

    return (palabra === alReves) ?
        console.info(`La palabra si es un palindromo porque ${palabra} = ${alReves}`) :
        console.info(`La palabra no es un palindromo porque ${palabra} != ${alReves}`);
}

// palindromo();
// palindromo('hola mundo');
// palindromo('SalAs');


// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const eliminarCaracteres = (texto = '', patron = '') => {
    (!texto) ?
    console.warn('No ingresaste ningun texto'):
        (!patron) ?
        console.warn('No ingresaste un ningun patron') :
        // console.info(texto.replace(new RegExp(patron, 'ig'), ''));
        // como primer parametro de replace creo una instancia de un patron regular con new RegExp
        // a RegExp le pasamos el patron e ig g significa que no se detiene en la primer coinsidencia buscara todas las que encuentre 
        // como segundo parametro a replace '' porque no queremos que lo reemplace por algo 
        console.info(texto.replace(new RegExp(patron, 'ig'), ''));
}

// eliminarCaracteres();
// eliminarCaracteres('xyz0, xyz1, xyz2, xyz3, xyz4, xyz5');
// eliminarCaracteres('xyz0, xyz1, xyz2, xyz3, xyz4, xyz5', 'xyz');

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. (!IsNaN('texto'))
const numAleatorio = () => console.info(Math.ceil((Math.random() * 100) + 500));

// numAleatorio();
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const numCapicua = (num = 0) => {
    if (!num) return console.warn('no ingresaste un número');
    if (typeof num !== 'number') return console.error(`El valor ${num} ingresado no es un número`);

    num = num.toString();
    let alReves = num.split('').reverse().join('');

    return (num === alReves) ?
        console.info(`El numero ${num} sí es capícua porque ${num} = ${alReves}`) :
        console.info(`El numero ${num} no es capícua porque ${num} != ${alReves}`);
}

// numCapicua();
// numCapicua('12');
// numCapicua(10);
// numCapicua(111);

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial = (num = undefined) => {
    if (num === undefined) return console.warn('no ingresaste un número');
    if (typeof num !== 'number') return console.error(`El valor ${num} ingresado no es un número`);
    if (num === 0) return console.error('No existe el factorial de 0');
    if (Math.sign(num) === -1) return console.error('No existe el factorial un número negativo');

    let factorial = 1;

    for (let i = num; i > 1; i--) {
        // factorial = factorial * i
        factorial *= i
    }
    return console.log(`El factorial de ${num} es ${factorial}`);
}

// factorial();
// factorial('5');
// factorial(5);

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const numPrimo = (num = undefined) => {
    if (num === undefined) return console.warn('no ingresaste un número');
    if (typeof num !== 'number') return console.error(`El valor ${num} ingresado no es un número`);
    if (num === 0) return console.error('No existe número primo de 0');
    if (num === 1) return console.error('No existe número primo de 1');
    if (Math.sign(num) === -1) return console.error('No existe un número pirmo negativo');

    let divisible = false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            divisible = true;
            break;
        }
    }
    return (divisible) ? // es verdadero
        console.info(`El número ${num} no es primo`) :
        // si se mantuvo en false osea que no es divisible enntre nungun numero
        console.info(`El número ${num} si es primo`);
}

// numPrimo();
// numPrimo('5');
// numPrimo(0);
// numPrimo(1);
// numPrimo(-1);
// numPrimo(6);
// numPrimo(5);

// 12) Programa una función que determine numeros primos del 1 al 100 (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
let primes = [];
let noPrimes = [];
const numMaxPrimo = (num = undefined) => {
    if (num === undefined) return console.warn('no ingresaste un número');
    if (typeof num !== 'number') return console.error(`El valor ${num} ingresado no es un número`);
    if (num === 0) return console.error('No existe número primo de 0');
    if (num === 1) return console.error('No existe número primo de 1');
    if (Math.sign(num) === -1) return console.error('No existe un número pirmo negativo');


    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            primes.push(i);
        } else {
            noPrimes.push(i);
        }
    }
}

const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
        return true;
    }
}


// numMaxPrimo();
// numMaxPrimo('100');
// numMaxPrimo(0);
// numMaxPrimo(1);
// numMaxPrimo(-1);
// numMaxPrimo(true);
// numMaxPrimo(10000000);
// console.log('primes', primes);
// console.log('noPrimes', noPrimes);


// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const parInpar = (num = undefined) => {
    if (num === undefined) return console.warn('no ingresaste un número');
    if (typeof num !== 'number') return console.error(`El valor ${num} ingresado no es un número`);
    if (num === 0) return console.error('No existe número par o inpar de 0');

    return (num % 2 === 0) ?
        // caso verdadero
        console.info(`El número ${num} es par`) :
        // caso falso
        console.info(`El número ${num} es inpar`);
}

// parInpar();
// parInpar('3');
// parInpar(0);
// parInpar(5);
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const celToFahr = (grados = undefined, unidad = undefined) => {
    if (grados === undefined) return console.warn('no ingresaste grados a convertir');
    if (typeof grados !== 'number') return console.error(`El valor ${grados} ingresado no es un grado de temperatura`);

    if (unidad === undefined) return console.warn('no ingresaste el tipo de grados a convertir');
    if (typeof unidad !== 'string') return console.error(`El valor ${unidad} ingresado no es una cadena de texto`);
    if (unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn('valor de unidad no reconocido');

    if (unidad === 'C') {
        return console.info(`${grados}ºC = ${Math.round((grados*(9/5))+32)}ºF`);
    } else if (unidad === 'F') {
        return console.info(`${grados}ºF = ${Math.round(((grados-32)*(5/9)))}ºC`);
    } else {
        return console.error('El tipo de grados a convertir no es valido');
    }
}

// celToFahr()
// celToFahr('2')
// celToFahr(2)
// celToFahr(2, true)
// celToFahr(2, 'hola')
// celToFahr(2, 'E')
// celToFahr(0, 'C');
// celToFahr(32, 'F')


// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

var a1 = 3;

function foo1() {
    var a1 = 2;
    console.log('a1', a1);
}

function pro1() {
    foo1();
}

foo1();



// function foo2() {
//     console.log('a2', a2);
// }

// function bar2() {
//     var a2 = 3;
//     // console.log('a2', a2);
//     foo2();
// }

// var a2 = 2;

// bar2();

// var cadena = ['perro', 'gato', 'caballo', 'vaca'];

// cadena.filter((valor) => {
//     return valor.length < 5;
// });

// console.log(cadena);


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


// function f(foo) {
//     return foo && foo * 3 || null;
// }

// f(foo);

// x = "4" + 4 + 5
// y = 4 + 4 + "5"

// console.log(x + '' + y)
// console.log(x + ' ' + y)



// let v;
// let t = v === null;

// console.log(t)


// let counter = 1;
// let z = counter++; // (*) cambiado ++counter a counter++

// console.log(z); // 1
// console.log(counter); // 2


// let counter1 = 0;
// console.log(counter1++); // 


// let c;
// let s = [];
// console.log(Boolean(c) == Boolean(s));

// let letras = ['lambda', 'alfa', 'gamma', 'beta'];
// console.log(letras)
// letras.sort();
// letras.shift();
// console.log(letras)





// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).