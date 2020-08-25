// // let text = ('hola');
// // let text = ('hola mundo');
// let text = ('El amo de los strings invertidos');


// let size = text.length;
// let position = size - 1;
// let invertText = [];

// console.log('size', size);
// console.log('position', position);
// // text par

// for (let i = 0; i <= position; i++) {
//     if (text[i] !== ' ' && text[position - i] !== ' ') {
//         invertText[i] = text[position - i]
//     } else if (text[i] === ' ') {
//         invertText[i] = text[i]
//     } else {
//         invertText[position - i] = text[position - i]
//     }
// }

// console.log('invertText', invertText.join(''));


// function invertirCadena(text = '') {
//     let size = text.length;
//     let position = size - 1;
//     let invertText = [];

//     // console.log('size', size);
//     // console.log('position', position);
//     if (!text) return console.warn('No ingresaste un texto');

//     for (let i = 0; i <= position; i++) {
//         if (text[i] !== ' ' && text[position - i] !== ' ') {
//             invertText[i] = text[position - i]
//             invertText[position - i] = text[i]
//         } else if (text[i] === ' ') {
//             invertText[i] = text[i]
//             invertText[position - i] = text[i + 1]

//         } else {
//             invertText[position - i] = text[position - i];
//         }
//     }
//     return invertText.join('');
// }


// console.log(invertirCadena(''));
// console.log(invertirCadena('Hola'));
// console.log(invertirCadena('Hola Mundo'));
// console.log(invertirCadena('El amo de los strings invertidos'));




let invertirCadena = (text = '') => {
    let size = text.length - 1;
    // tamaño de text
    // console.log('size', size);
    //elimina espacios en blanco y modifica tamaño de text
    let sinEspacios = text.replace(/\s/g, '')
        // console.log('sinEspacios', sinEspacios);
        // console.log('sinEspacios', sinEspacios.length);

    // let invertText = [...sinEspacios] // separamos cada elemento
    // let invertText = [...sinEspacios].reverse(); invierte el arreglo 
    let invertText = [...sinEspacios].reverse();
    // console.log('invertText', invertText)

    // validacion paraq ue mande error si no manda nada
    if (!text) {
        console.warn('No ingresaste un texto');
    }

    // recorro text para buscar espacios
    for (let i = 0; i <= size; i++) {
        if (text[i] === ' ') {
            // si encontramos espacios en text
            // los coloco en su posicion original pero ahora en invertText
            invertText.splice(i, 0, ' '); // agrega en la pocicion i un espacio y recorre una posicion cada letra
            // console.log('invertText 1', invertText)
        }
    }


    return invertText.join('');
    // console.log('invertText 2', invertText)

}


console.log(invertirCadena(''));
console.log(invertirCadena('Hola'));
console.log(invertirCadena('Hola Mundo'));
console.log(invertirCadena('El amo de los strings invertidos'));