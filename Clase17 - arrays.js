var victor = {
    nombre: 'victor',
    apellido: 'peña',
    altura: 1.72
}

var esther = {
    nombre: 'esther',
    apellido: 'hernandez',
    altura: 1.60
}

var derek = {
    nombre: 'derek',
    apellido: 'peña',
    altura: 0.90
}

var gloria = {
    nombre: 'gloria',
    apellido: 'martinez',
    altura: 1.55
}

var chucho = {
    nombre: 'chucho',
    apellido: 'pineda',
    altura: 1.50
}

var alexis = {
    nombre: 'alexis',
    apellido: 'peña',
    altura: 0.90
}

var personas = [victor, esther, derek, gloria, chucho, alexis]

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} se apellida ${persona.apellido} y mide ${persona.altura}mts`)
}