const API_URL = 'https://swapi.co/api/'
    // ahora pondremos la parte de las personas 
const PEOPLE_URL = 'people/:id'
    // const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomian: true }




/////////////32 modificaremos obtenerPersonaje para que nos retorne una promesa en ves de que 
// reciba un callback como parametro, borraremos los callbacks de hasta abajo las que estan anidadas
// function obtenerPersonaje(id, callback) { borraremos el callback para que ahora reciba una promesa
function obtenerPersonaje(id) {
    // retornaremos una nueva promesa, en el constructor de la promesa 
    // tenemos que pasarele una funcion como parametros resolve, reject, y dentro de la funcion realizaremos
    // el llamado asincrono
    return new Promise((resolve, reject) => {
        // seguiremos ocupando jquery subiremos la generacion de la url
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
            // en lugar de llamar al callback callback  pondremos el callback funcion 
            // que cuando llegue la respuesta se ejecutara ese callback funcion
            // .get(url, opts, callback)
            // con la data que nos llegue al momento de ejecutar el ger la funcion resolvera la promesa
            // con la data que llego
        $
            .get(url, opts, function(data) {
                resolve(data) //esta data que nos envia la utilizaremos en personaje
            })
            // pasaremos el fail para arriva para que de el error en el reject
            .fail(() => reject(id)) // id que utilizaremos en .catch 
    })
}


function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

// llamar a la funcion obtenerPersonaje con un solo parametro el id que me intereza ya que no existe otro
// // porque en ese momento para obtener el valor que esperamos de una promesa es llamr al .then
// pasandole una funcion que se ejecutara cuando la promesa se resuelva exitosamente pasando le al
// personaje como parametro
/////////////////////33 ponemos la funcion como arrow function
// y encadenamos los .then para sacar los demas personajes
obtenerPersonaje(1)
    .then(personaje => {
        console.log(`El personaje 1 es ${personaje.name}`)
        return obtenerPersonaje(2) ////33 esto nos devielve una promesa para poder 
            // encadenar un nuevo .then por separado pero encadenado///
    })
    .then(personaje => {
        console.log(`El personaje 2 es ${personaje.name}`)
        return obtenerPersonaje(3)
    })
    .then(personaje => {
        console.log(`El personaje 3 es ${personaje.name}`)
        return obtenerPersonaje(4)
    })
    .then(personaje => {
        console.log(`El personaje 4 es ${personaje.name}`)
        return obtenerPersonaje(5)
    })
    .then(personaje => {
        console.log(`El personaje 5 es ${personaje.name}`)
        return obtenerPersonaje(6)
    })
    .then(personaje => {
        console.log(`El personaje 6 es ${personaje.name}`)
        return obtenerPersonaje(7)
    })
    .then(personaje => {
        console.log(`El personaje 7 es ${personaje.name}`)
        return obtenerPersonaje(8)
    })
    .then(personaje => {
        console.log(`El personaje 8 es ${personaje.name}`)
        return obtenerPersonaje(9)
    })
    .then(personaje => {
        console.log(`El personaje 9 es ${personaje.name}`)
        return obtenerPersonaje(10)
    })
    .then(personaje => {
        console.log(`El personaje 10 es ${personaje.name}`)
        return obtenerPersonaje(11)
    })
    .then(personaje => {
        console.log(`El personaje 11 es ${personaje.name}`)
        return obtenerPersonaje(12)
    })
    .then(personaje => {
        console.log(`El personaje 12 es ${personaje.name}`)
        return obtenerPersonaje(13)
    })
    .then(personaje => {
        console.log(`El personaje 13 es ${personaje.name}`)
        return obtenerPersonaje(14)
    })

// estos request son es serie
/////////////////////////////////////////////////////////


// // si sucede un error lalamremos a la funcion .catch(id)
// .catch(function(id){
//   onError(id)
// }) se puede asi pero mejor hacemos una funcion onError ponemos el nombre de la funcion que se va a ejecutar
.catch(onError)