
//Es un comentario de una sola línea
/*
Esto es un 
comentario de
varias lineas
*/


//Funciones: bloque de código que ejecuta una tarea específica
//Estructura de una función
function arbitro(tarjetas, silvatos, uniformes) {
    // la tarea de la función va entre las llaves 

    //1. Saludar a los jugadores
    console.log("Buenas tardes, soy el arbitro del partido");

    //2. Sacar una tarjeta roja un jugador 
    console.log("Usted tiene una tarjeta " + tarjetas);

    //3. Hacer sonar el silvato
    console.log("El silvato suena: " + silvato);
}

//Creamos la variable tarjetas y le asignamos un valor
let tarjeta = "roja";

// Creamos la variable silvato y le asignamos un valor
let silvato = "piiiiiiiiiiiiii";

// llamar a la función y le pasamos la tarjeta 
arbitro(tarjeta, silvato);




