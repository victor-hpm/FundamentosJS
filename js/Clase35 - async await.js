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

/////////35 crearemos una funcion obrernerPersonajes que tendra todo adentro

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas) //cuando todos las promesas se resuelvan guarda el resultado en personajes
            // await detiene la ejecucion hasta que todas las promesas sean resueltas y se guardara en personajes
            //   // pero es necesario que pongamos la palabra async para decir que es asincrono
            // try el llamado asincrono va dentro del try (donde se usa la palabra await)
            // y en catch el caso del error
        console.log(personajes) // lo que hacemos con los personajes una ves que los tenemos
    } catch (id) {
        onError(id)
    }
}



obtenerPersonajes()


/////////////////35