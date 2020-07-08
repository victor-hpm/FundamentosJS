var signo = prompt('¿Cuál es tu signo?')

console.log(signo)


switch (signo) {
    case 'aries':
        console.log('No permita que sus curiosidades inoportunas lo detengan en su avance. No renuncie y siga adelante con todos los proyectos que se propuso hace tiempo.')
        break
    case 'tauro':
        console.log('Sepa que los logros futuros dependerán de su actual creatividad. Proyéctese para resolver sobre la marcha todas las situaciones nuevas que puedan surgir.')
        break
    case 'geminis':
    case 'géminis':
        console.log('No dude en confiar en sus amigos. Sepa que ellos lo ayudarán a cimentar su futuro, ya que lo apoyarán en todo lo que necesite para su vida.')
        break
    case 'cancer':
        console.log('Si está con problemas, debe abandonar todas las ideas pesimistas. Recuerde que en otras oportunidades pudo superar obstáculos peores y salir beneficiado.')
        break
    case 'leo':
        console.log('Encuentre las soluciones precisas a los inconvenientes financieros que están apareciendo últimamente. Relájese, el resto de los problemas se irán arreglando solos.')
        break
    case 'virgo':
        console.log('Durante esta jornada, se sentirá un poco confundido. No sabrá cómo manejar una situación en la que tendrá que elegir entre dos caminos diferentes.')
        break
    case 'libra':
        console.log('Seguramente se sentirá relajado, ya que se ha librado de viejas ataduras y dependencias que lo limitaban para tomar una determinación.')
        break
    case 'escorpio':
        console.log('Mientras usted se siga negando al triunfo en todos los sentidos, podrían retrasarse o no fluirán como esperaba esas metas que se ha propuesto.')
        break
    case 'sagitario':
        console.log('Sea consciente y no postergue para mañana lo que pueda hacer hoy. Relájese, ya que cumplirá con todas las metas que se ha propuesto alcanzar.')
        break
    case 'capricornio':
        console.log('Período donde las emociones estarán desordenadas. Será muy importante que mantenga un equilibrio ante las situaciones que enfrente en esta jornada.')
        break
    case 'acuario':
        console.log('Será una jornada excesiva de preocupaciones y responsabilidades, trate de confrontar de a un tema por vez y logrará obtener muy buenos resultados en lo que haga.')
        break
    case 'piscis':
        console.log('Se acerca una etapa donde podrá generar una transformación total en su vida. Recuerde que los cambios siempre conducen a un nuevo aprendizaje.')
        break
    default:
        console.log('No es un signo zodiacal valido')

        // default si ninguna condicion se cumple 
}