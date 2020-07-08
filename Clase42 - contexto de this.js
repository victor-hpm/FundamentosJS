const victor = {
    nombre: 'Victor',
    apellido: 'Peña',
    edad: 27
}

const esther = {
    nombre: 'Esther',
    apellido: 'Herandez',
    edad: 26
}

function saludar(saludo = 'hola') {
    console.log(`${saludo} mi nombre es ${this.nombre}`) //aqui this hace referencia a window
}

// 1 bind cambia el contexto del this en una funcion  bind(a quien esta atado, ylos demas en el orden que aparescan, 'dfjkghdfjkg','hjfh')
// la funcion bind no ejecuta la funcion si no solo retorana una nueva funcion con ese contexto cambiado   
// const saludarAVictor = saludar.bind(victor) //  nos devuelve una nueva funcion atando el this al parametro victor
// const saludarAEsther = saludar.bind(esther)

// 2 setTimeout
// setTimeout(saludar.bind(victor, 'hola che'), 1000) //añadimes una nueva fucnion que tiene atado el this a victor

// 3 call y applay  las dos ejecutan la funcion en ese momento
// saludar.call(victor) // se ejecuta en ese momento
// parametros del call(victor, 'hola che')

// applay
saludar.apply(victor, ['hola che'])
    // saludar.apply(victor, ['hola che',...,...])
    // parametros applay(quien va a ser el this, un array que contine los parametros de la fucnion)