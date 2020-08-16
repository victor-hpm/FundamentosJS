class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() { //no es necesario la palabra function
        console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto() {
        return this.altura > 1.8
    }
}



// hacer que una clase (Desarrollador) herede de otra
// la palabra extends es la encargada de la herencia y la 
// palabra que le sigue es de la class que tendra la herencia
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
            // debemos llamar al constructor super de la clase padre antes de acceder a this
            // para poder acceder a la herencia
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a`)
    }
}

// var victor = new Persona('victor', 'peña', 1.72)
// var erika = new Persona('erika', 'luna', 1.65)
// var arturo = new Persona('arturo', 'martinez', 1.89)

// victor.saludar() // 1 funcion para salidar le tenemos que decir a prototipo de persona que exista una funcion saludar el cual esta arriba
// erika.saludar()
// arturo.saludar()