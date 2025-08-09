//Es un comentario de una sola línea
/*
Esto es un 
comentario de
varias líneas
*/

// Función pagar: se encarga de restar dinero de una cuenta y mostrar el saldo restante
function pagar(dinero) {
    //1. Mostrar el saldo inicial
    console.log("Tu saldo inicial es de: $" + saldo);

    //2. Informar el dinero que se quiere pagar
    console.log("Vas a pagar: $" + dinero);

    //3. Restar el dinero del saldo
    saldo = saldo - dinero;

    //4. Mostrar el saldo final
    console.log("Tu saldo final es de: $7500");

}

// Creamos la variable saldo y le asignamos un valor inicial
let saldo = 10000;

// Llamamos a la función pagar y le pasamos un monto
pagar(2500);

