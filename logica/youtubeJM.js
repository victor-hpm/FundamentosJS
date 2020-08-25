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

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.