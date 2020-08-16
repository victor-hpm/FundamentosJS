// hesmos estado pasando parametros que son numeros, nombres, apellidos
// pero tambien podemos pasar ambien podemos pasar funciones como parametros
// por lo tamto tomaremos la clase anterior y haremos que responda a ese saludo

class Persona {
    constructor(nombre, apellido, altura) {
            this.nombre = nombre
            this.apellido = apellido
            this.altura = altura
        }
        ////////////////
    saludar(fn) { //no es necesario la palabra fn como parametro de saludar
        var { nombre, apellido } = this // this desestructurado
        console.log(`hola, me llamo ${nombre} ${apellido}`)
            /// preguntamos con un if si fn tiene un valor 
        if (fn) {
            fn(nombre, apellido, null) //null para que sea negativo  ya que este saludo es para persona
        }
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
    saludar(fn) { ////////// desestructurando this, fn debe estar como parametro de saludar
        // var nombre = this.nombre
        // var apellido = this.apellido
        // o mejor asi que es equivalente
        // y de igual forma tiene que ir en el saludo de la Persona
        // y abajo en console.log() quitamos el this.
        var { nombre, apellido } = this
        console.log(`Hola me llamo ${nombre} ${apellido} y soy Desarrollador/a`)
            //////////// esto sin poner fn(this.nombre, this.apellido) no funcionara pero lo podemos poner arriba desestructurandolo en un variable
        if (fn) {
            fn(nombre, apellido, true) // es este caso el true dice que si es desarrolldor y lo ebvaluara como verdadero
        }
    }
}

/////////////////////
// function que respondera respondera saludo
// nombre y apellido llegara por parametro en responderSaludo(parametros)
function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`)
        // esDev lo obtendra con un bouleano  true or false
    if (esDev) {
        console.log(`Ah mira, no sabia que eras Desarrollador/a`)
    }
}


var victor = new Persona('victor', 'peña', 1.72)
var erika = new Persona('erika', 'luna', 1.65)
var arturo = new Desarrollador('arturo', 'martinez', 1.89)

victor.saludar() // 1 funcion para salidar le tenemos que decir a prototipo de persona que exista una funcion saludar el cual esta arriba
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)
    // pasamos la funcion responderSaludo como parametro en este llamado
    // e iremos a la funcion saludar de la persona y ponemos fn pero puede se culquiera