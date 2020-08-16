// para definr un prototipo definiremos una funcion 
// function persona (parametros a requerir o inicializar){ 
// funcion a ejecutarse
// }

function Persona(nombre, apellido) {
    // para guardarlo dentro del objeto que se esta construyendo en la memoria utilizamos this
    this.nombre = nombre
    this.apellido = apellido
        // (return this) no se pone ya que lo hace implicitamente cuando llamamos a la funcion persona 
        // con la palabra new
}

// 2 le decimos que dentro del  prototipo de de persona habra un atributo saludar que sera una funccion (sin parametros) 
Persona.prototype.saludar = function() {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)

}


// new se utiliza para crear nuevos objetos dado un prototipo
// // en este caso el prototipo de Persona 
// la palabra new seguida del prototipo hace que se cree un nuevo 
// objeto y a ese objeto se le asignara como prototipo el prototipo que le 
// que le indiquemos Despues, luego se ejecutara el construcurtor {la funcion} 
// e implicitamente retornara el objeto  que se acaba de construir.

// var victor = new Persona(parametros)

var victor = new Persona('victor', 'peña')
var erika = new Persona('erika', 'luna')
var arturo = new Persona('arturo', 'martinez')

// victor.saludar() // 1 funcion para salidar le tenemos que decir a prototipo de persona que exista una funcion saludar el cual esta arriba
// erika.saludar()
// arturo.saludar()