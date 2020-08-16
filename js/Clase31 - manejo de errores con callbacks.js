const API_URL = 'https://swapi.co/api/'
    // ahora pondremos la parte de las personas 
const PEOPLE_URL = 'people/:id'
    // const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomian: true }


////////////////////31
// haremos un pequeño refacor, lo que sucede es que tenemos dos callbacks
// el de la funcion (persona y el del if, por lo tanto moveremos esl console. log 
// a la logica del callback del if
function obtenerPersonaje(id, callback) {

    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

    // y cambiamos la function(persona por callback)
    $
        .get(url, opts, callback)
        // codigo de erros, si se queda sin red se ejecuta la funcion 
        // .fail(function() { arrow function
        .fail(() => {
            console.log(`Sucedio un error, no se pudo obtener ${id}`)
        })
        //  lo que esta comentado lo quitamos para moverlo a la logica de los callbackde abajo
        // $.get(url, opts, function(persona) {
        // console.log(`Hola, yo soy ${persona.name}`)

    // if (callback) {
    //     callback()
    // }
}


// lo que sucede obtenemos el personaje 1 y le pasamos como parametro el callback

obtenerPersonaje(1, function(personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2, function(personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function(personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function(personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5, function(personaje) {
                    console.log(`Hola, yo soy ${personaje.name}`)

                    obtenerPersonaje(6, function(personaje) {
                        console.log(`Hola, yo soy ${personaje.name}`)

                        obtenerPersonaje(7, function(personaje) {
                            console.log(`Hola, yo soy ${personaje.name}`)

                            obtenerPersonaje(8, function(personaje) {
                                console.log(`Hola, yo soy ${personaje.name}`)

                                obtenerPersonaje(9, function(personaje) {
                                    console.log(`Hola, yo soy ${personaje.name}`)

                                    obtenerPersonaje(10, function(personaje) {
                                        console.log(`Hola, yo soy ${personaje.name}`)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})