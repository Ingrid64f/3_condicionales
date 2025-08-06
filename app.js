/* //Ejercicio 1 de condicionales-Ingreso a la discoteca

//Datos del usuario
let nombre = prompt("Dame tu nombre:");
let edad= parseInt(prompt("Ingresa tu edad:"));

// Verificar la edad
if (edad >= 18) {

    // Si es mayor de edad, puede ingresar
    mensaje = `Holis Bienvenido ${nombre}, puedes ingresar a la discoteca, disfrútalo.`;
    
    // Verificar acceso VIP dentro del bloque if
    switch (nombre.toLowerCase()) {
        case "mario":
        case "carlos":
            mensaje += " Además, tienes acceso al VIP.";
            break;
        default:
            // No hace nada si no es Mario o Carlos
            break;
    }
} else {
    // Si es menor de edad, no puede ingresar
    mensaje = `¡Wio,Wio,Wio! Lo siento ${nombre}, no puedes ingresar a la discoteca,eres menor.`;
}

// Mostrar los resultado en las pantallas
console.log(mensaje);
alert(mensaje);  */

 

//Ejercicio 2-Ingreso al equipo

//Datos del usuario
let estatura = prompt("Dime tu estatura en cm:");
let velocidad= parseInt(prompt("Cual es tu velocidad en km/h:"));
let edad = parseInt(prompt("Dime tu edad:")); 

//Requisitos basicos para ser el selecionado
if (estatura >= 170 && velocidad >= 27) {
alert("Puedes ingresar a un equipo")
}
else {
    alert("¡Oh no!,no cumples con los requisitos")
}

if (edad >= 18) {
    alert("¡felicidades!,pasas a las divisiones mayores")
}
else {
    alert("¡felicidades!, pasas a las divisones menores")
}
    
console.log(mensaje);
alert(mensaje);
    
