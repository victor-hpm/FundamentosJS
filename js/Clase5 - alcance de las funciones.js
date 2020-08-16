var nombre = 'Victor'

// function imprimirNombreEnMayusculas() {
//     nombre = nombre.toLocaleUpperCase()
//     console.log(nombre)
// } 
// imprimirNombreEnMayusculas()
// sin ninguna varible que reciba

// esta menera modifica por completo mi variable global por lo que 
// es preferible usar la siguiente forma ya que asi se usa un avariable 
// independiente n que solo existe en la funcion para la funcion sin 
// modificar mi variable global en un proceso futuro

// function imprimirNombreEnMayusculas(n) {
//     n = n.toLocaleUpperCase()
//     console.log(n)
// }

// imprimirNombreEnMayusculas(nombre)
// se le manda la variable que usara en n

// existe otra manera mandadole el la variable con la que trabajarà 
// localmete la funcion al momento de llamarla y en el nombre de la funcion
function imprimirNombreEnMayusculas(nombre) {
    nombre = nombre.toLocaleUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(nombre)