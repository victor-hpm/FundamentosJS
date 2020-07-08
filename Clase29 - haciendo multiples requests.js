const API_URL = 'https://swapi.co/api/'
    // ahora pondremos la parte de las personas 
const PEOPLE_URL = 'people/:id'
    // const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomian: true }

const onPeopleResponse = function(persona) {
    console.log(`Hola, yo soy ${persona.name}`)
}

// ////////////////////29
// vamos a hacer un programa que logue lo datos de multiples personajes
// con request en paralelo
// primero crearemos una function que obtenga un personaje a partir de un id
function obtenerPersonaje(id) {
    // definimos un url la cual es la que nteniamos para luke pero ahora en general
    // por lo tanto la url de arriba ya no nos sirve
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        // remplazaremos :id por el id de la funcion ,,,arriba
        // por ultimo hacemos es request a la url ,,,,abajo
    $.get(url, opts, onPeopleResponse)
}

for (var i = 1; i < 50; i++) {
    obtenerPersonaje(i)
}