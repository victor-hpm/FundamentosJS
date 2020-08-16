///////////////////////////////////////2 herencia prototipal antigua
function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function() {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
        // funccion constructora
    prototipoHijo.prototype.constructor = prototipoHijo
}
//////////////////////////////////////////



function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
Persona.prototype.saludar = function() {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
}


///////////////////////////////////////////1
function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a`)

    }
    //////////////////////////////////////////////


// var victor = new Persona('victor', 'peña', 1.72)
// var erika = new Persona('erika', 'luna', 1.65)
// var arturo = new Persona('arturo', 'martinez', 1.89)

// victor.saludar() // 1 funcion para salidar le tenemos que decir a prototipo de persona que exista una funcion saludar el cual esta arriba
// erika.saludar()
// arturo.saludar()