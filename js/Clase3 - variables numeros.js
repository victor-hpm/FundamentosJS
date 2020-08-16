var edad = 27,
    peso = 62,
    precioDeVino = 200.3,
    totalError = precioDeVino * 3,
    totalCorrecto = precioDeVino * 100 * 3 / 100,
    totalSinFalla = Math.round(precioDeVino * 100 * 3) / 100,
    // totalSinFalla = Math.round(precioDeVino * 100 * 3) / 100 modulo Math.round de matematicas y redondeara sin importar el numor de decimales que tenga el precio del vino
    totalStr = totalSinFalla.toFixed(2),
    // totalStr = total.toFixed(2) para dar el numero de decimales que se veran en pantalla
    total2 = parseFloat(totalStr),
    // total2 = parseFloat(totalStr) convierte un string a numeros parseFloat
    pizza = 8,
    personas = 2,
    CantidadDePorcionesPorPersona = pizza / personas


// edad = edad + 1
edad += 1
    // peso = peso - 2
peso -= 2

// total = precioDeVino * 3