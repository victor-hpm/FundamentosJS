document.write('Contador de digitos de un número entero positivo<br>');

let num = parseInt(prompt('proporciona un numero entero positivo', 1));

document.write(`Numero proporcionado es: ${num}<br>`);
let contatador_digitos = 0;

while (num >= 1) {
    num = num / 10
    contatador_digitos++
}

document.write(`El número tiene ${contatador_digitos} digitos`)