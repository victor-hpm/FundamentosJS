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

///////////////34
// haremos un array con el numero de los personajes que queremos
// para que cada elemento del array sea una promesa

var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// por medio de la funcion map la cual modifica cada elemento del Array
// crearemos un nuevo array con una promesa cada uno

// // function normal
// var promesas = ids.map(function(id){ //recibe un id
//     return obtenerPersonaje(id) // rtornaremos un array modificada 
//     // y que por cada elemento retornaremos una promesa    
// })
// lo mismo de arriba pero en arrow function
var promesas = ids.map(id => obtenerPersonaje(id))
    // para obrener los valores llamamos a Promise.all
Promise
    .all(promesas) //le pasamos el array de promesas
    .then(personajes => console.log(personajes)) // lo encadenamos, y tenemos un array con los valores de cada uno de los elementos 
    // y esperamos personajes y que haremos con los personajes, en principio haremos un console.log
    .catch(onError)

// esto esta realizando tareas en paralelo