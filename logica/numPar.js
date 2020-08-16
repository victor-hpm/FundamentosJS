document.write('Número Par o Inpar:<br>')
    // parseI para convertir de string a num
let num = parseInt(prompt('Introduce un numero', 1));

if (num > 0) {
    if (num % 2 == 0) {
        document.write(`El número ${num} es par`);
    } else {
        document.write(`El número ${num} es inpar`);
    }

} else {
    document.write('Ingresa un número positivo');
}
// document.write(`El valor proporcionado fue ${num}`);