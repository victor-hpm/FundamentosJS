// accederemos a los datos de la API desde nuestro programa haremos un Request
// url a la cual queremos acceder la cual guardaremos en una constante
const API_URL = 'https://swapi.co/api/'

// ahora pondremos la parte de las personas 
const PEOPLE_URL = 'people/:id'

// para poder hacer un request cons jquery tenemos que llamar al metodo $.get
// $.get(`${API_URL}${PEOPLE_URL.replace(':id',1)}`) metodo de todos los strings .replace  que cambia un estrig por otro (viejo, nuevo)
// $.get(`${API_URL}${PEOPLE_URL.replace(':id',1)}`)

// segundo parametro es indicarle a jquery que este request se hara hacia otra pagina con la coma y poniendo un objeto ,{crossDomian: true} 
// $.get(`${API_URL}${PEOPLE_URL.replace(':id',1)}`, {crossDomian: true})

// achicaremos lo parametros
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomian: true }
    // $.get(lukeUrl, opts) ulltimo para cambiarla e insertarle una funcion onPeopleResponse 

// por ultimo pondremos el callback la cyual es una funcion que se ejecutare en un futuro incierto pero que el $.get sera el 
// encargado de llamarla cuando termine el request (que puede o no llamarla)


const onPeopleResponse = function(persona) {
    console.log(`Hola yo soy, ${persona.name}`)
}



$.get(lukeUrl, opts, onPeopleResponse)