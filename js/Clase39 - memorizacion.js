function factorial(n) {
    // para la memoria interna la cache
    if (!this.cache) { // primero pregunta si la cache esta definida si no esta definida 
        this.cache = {} // creamos un objeto nuevo vacio
    }

    if (this.cache[n]) { //++++++ aqui pregunta si este factorial ya fue realizado 
        return this.cache[n] // si ya fue hecho solo lo retorna y se salta todos los pasos de abajo
    }

    if (n === 1) { // caso base
        return 1
    }
    // return n * factorial(n - 1) quitamos el return y ponemos la cache
    this.cache['n'] = n * factorial(n - 1) // esto se ejecuta solo la primera ves, si ya fue calculado se pregunta arriba y ya no se ejecuta esto +++++
        // y en la cache se gurda cada factorial realizado con esta cuenta  [n] como es un objeto podemos agregarle atributos como guardar el numero
    return this.cache[n] // retorna 
}

// n=3
// 3===1 no entonces retorna 3
// 3* factorial(2)
// 2===1 no entonces retorna 2
// 3*2*factorial(1)
// 1===1 si entonces retorna 1
// 3*2*1= 6