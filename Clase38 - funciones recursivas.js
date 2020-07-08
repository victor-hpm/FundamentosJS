/*   13 /_4_____  

    13 - 4 = 9      1
    9  - 4 = 5      1
    5  - 4 = 1      1
    1  - 4 = -3     0   caso base


    la consicion es que el dividendo sea mayor o igyal que el divisor ( que no salgan negativos)
    */


function divisionEntera(dividendo, divisor) {
    if (dividendo < divisor) { //caso base
        return 0
    }
    return 1 + divisionEntera(dividendo - divisor, divisor)
}


// 1 + (13-4, 4)
// 1 + (9,4)
// 1 

// 1 + (9-4,4)
// 1 + (5,4)
// 1 + 1 

// 1 + (5-4,4)
// 1 + (1,4)
// 1 + 1 + 1

// 1 + (1-4,4)
// 1 + (-3,4)
// 1 + 1 + 1 + 0