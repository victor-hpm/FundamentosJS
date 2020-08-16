const API_URL = 'https://swapi.co/api/'
    // ahora pondremos la parte de las personas 
const PEOPLE_URL = 'people/:id'
    // const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomian: true }


// //////30 
// para poder manipular el orden de las respues de los request 
// es mantener ese orden a lo largo del programa

// para esto tenelomos que cambias la funcion obtenerPersonaje y hacer 
// que acepte un segudo parametro (funcion) "callback"

function obtenerPersonaje(id, callback) {
    // despues haremos el primer callback onPeopleResponse se ejecute abajo en 
    // el momento en que se llama a la function
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

    $.get(url, opts, function(persona) {
        console.log(`Hola, yo soy ${persona.name}`)
            // si nos envinan un callback 
            // pues llamemoslo
        if (callback) {
            callback()
        }
    })
}

// ahora si queremos garantizar el orden de los request tenemos que llamar 
// a cada una de las siguientes funciones de obtenerPersonaje con callbacks
// y perderemos el paralelismo de los request realizandolos en serie

// es importante que la funcion que esta dentro sea una funcion
// que no se este ejecutando es decir la declaracion de una funcion
// o la referencia a una funcion

// entonces obtenddremos el personaje 1 y la funcion sera nuestro
// callback que llamara despues al personaje 2 haciendo un callback hell(infierno de callbacks)

obtenerPersonaje(1, function() {
    obtenerPersonaje(2, function() {
        obtenerPersonaje(3, function() {
            obtenerPersonaje(4, function() {
                obtenerPersonaje(5, function() {
                    obtenerPersonaje(6, function() {
                        obtenerPersonaje(7, function() {
                            obtenerPersonaje(8, function() {
                                obtenerPersonaje(9, function() {
                                    obtenerPersonaje(10)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

// por ultimo en el callback  ($.get) hay que llamarlo con un if



// por ultimo los request se obtienen en serie y no en pararelo