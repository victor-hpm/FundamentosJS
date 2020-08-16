function diasEntreFechas(fecha1, fecha2) {
    const miliSegundosEnUnDia = 1000 * 60 * 60 * 24 // 1000 milisegundos son unSegundo* por un minuto * por una hora * por 24 horas
    const diferencia = Math.abs(fecha1 - fecha2) //math.abs nos debuelve el absoluto en milisegundos

    return Math.floor(diferencia / miliSegundosEnUnDia) //Math.floor redondea hacia abajo
}

const hoy = new Date()
const nacimiento = new Date(1991, 10, 23) //fechas año, mes, dia ( mes enero es = 0, febrero= 2...)