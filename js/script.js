//declaración de funciones
function hello(){ //funcion bienvenida
    if ((nombre && apellido) != ""){
        alert (
            "Hola, " + nombre + " " + apellido + ". Bienvenido/a a un test de matemáticas fácil de realizar. "
            );
        alert (
            nombre + ", Los exámenes SAT se utilizan en EEUU para determinar la admisión en las universidades. Hemos seleccionado las preguntas más fáciles sobre matemáticas para ponerte a prueba... ¡Ánimo! "
        );
    } else while (nombre === "") {
        let error = "Tenés que ingresar un nombre y un apellido.";
        alert(error);
        nombre = prompt("Ingresá tu nombre");
        apellido = prompt("Ingresá tu apellido");
    }
}


function pregunta1(){
    let respuesta1;
    do{
        respuesta1 = prompt(
            "1) Hay 5 estuches en la mesa. Cada uno contiene como mínimo 10 lápices y como máximo 14. ¿Cuál de estos podría ser el total de lápices?"
            + "\n a. 45"
            + "\n b. 75"
            + "\n c. 65"
            + "\n d. 35".toLowerCase()
        );
    }while (respuesta1 !== "a" && respuesta1 !== "b" && respuesta1 !== "d") {
        alert ("Debe elegir una de las opciones especificadas.");
    }  
    if (prespuesta1 == "c") {
        alert("¡Tu respuesta fue correcta! Ganaste un punto.");
        let puntajeCorr = 1;
        return puntajeCorr;
    } else {
        alert("Tu respuesta fue incorrecta.");
        let puntajeErr = 0;
        return puntajeErr;
    }    
}

function pregunta2(){
    let pregunta2 = prompt(
        "2) Si X es menor que Y por una diferencia de 6 e Y es el doble de Z, ¿cuál es el valor de X cuando Z es igual a 2?"
        + "\n a. 5"
        + "\n b. -2"
        + "\n c. 8"
        + "\n d. 10".toLowerCase()
    );

    if (pregunta2 == "b") {
        alert("¡Tu respuesta fue correcta! Ganaste un punto.");
        let puntajeCorr = 1;
        return puntajeCorr;
    } else {
        alert("Tu respuesta fue incorrecta.");
        let puntajeErr = 0;
        return puntajeErr;
    }   
}   


function pregunta3(){
    let pregunta3 = prompt(
        "3) Si David tiene el doble de monedas de 5 centavos que Tomás y Tomás tiene 15 monedas de 5 centavos más que Juan, ¿cuántos pesos tiene David si Juan tiene 6 monedas de cinco centavos?"
        + "\n a. 2,10"
        + "\n b. 42"
        + "\n c. 21"
        + "\n d. 14".toLowerCase()
    );

    if (pregunta3 == "a") {
        alert("¡Tu respuesta fue correcta! Ganaste un punto.");
        let puntajeCorr = 1;
        return puntajeCorr;
    } else {
        alert("Tu respuesta fue incorrecta.");
        let puntajeErr = 0;
        return puntajeErr;
    }   
} 

function pregunta4(){
    let pregunta4 = prompt(
        "4) Lisa recibió un cheque regalo de 100 pesos por su cumpleaños. Se compró unas deportivas que costaban 30 pesos, un vestido de 23 pesos y dos libros de 17 pesos. ¿Cuánto dinero le quedó en el cheque regalo?"
        + "\n a. 30"
        + "\n b. 70"
        + "\n c. 45"
        + "\n d. 13".toLowerCase()
    );

    if (pregunta4 == "d") {
        alert("¡Tu respuesta fue correcta! Ganaste un punto.");
        let puntajeCorr = 1;
        return puntajeCorr;
    } else {
        alert("Tu respuesta fue incorrecta.");
        let puntajeErr = 0;
        return puntajeErr;
    }   
} 

function pregunta5(){
    let pregunta5 = prompt(
        "5) Cada estudiante puede elegir entre 4 tipos de sudadera y tres tipos de pantalones en su uniforme, ¿cuántas combinaciones posibles existen?"
        + "\n a. 10"
        + "\n b. 24"
        + "\n c. 12"
        + "\n d. 7".toLowerCase()
    );

    if (pregunta5 == "c") {
        alert("¡Tu respuesta fue correcta! Ganaste un punto.");
        let puntajeCorr = 1;
        return puntajeCorr;
    } else {
        alert("Tu respuesta fue incorrecta.");
        let puntajeErr = 0;
        return puntajeErr;
    }   
} 

function pregunta6(){
    let pregunta6 = prompt(
        "6) 3 (x-4) = 18. ¿Cuál es el valor de X?"
        + "\n a. 6"
        + "\n b. 14/3"
        + "\n c. 22/3"
        + "\n d. 10".toLowerCase()
    );

    if (pregunta6 == "d") {
        alert("¡Tu respuesta fue correcta! Ganaste un punto.");
        let puntajeCorr = 1;
        return puntajeCorr;
    } else {
        alert("Tu respuesta fue incorrecta.");
        let puntajeErr = 0;
        return puntajeErr;
    }   
} 

function pregunta7(){
    let pregunta7 = prompt(
        "7) Cecilia, Roberto y Braulio han comprado sellos. El total de sellos de Cecilia es de un solo dígito. Solo uno de los chicos tiene un número de sellos divisible por tres. Solo uno ha adquirido un número de sellos par. ¿Cuál de estas respuestas puede indicar la cantidad correcta de sellos de cada uno?"
        + "\n a. 9, 10, 13"
        + "\n b. 5, 15, 18"
        + "\n c. 6, 9, 12"
        + "\n d. 7, 9, 17".toLowerCase()
    );

    if (pregunta7 == "a") {
        alert("¡Tu respuesta fue correcta! Ganaste un punto.");
        let puntajeCorr = 1;
        return puntajeCorr;
    } else {
        alert("Tu respuesta fue incorrecta.");
        let puntajeErr = 0;
        return puntajeErr;
    }   
} 

function pregunta8(){
    let pregunta8 = prompt(
        "8) Fran ha comprado varias cometas y cada una costaba 16 pesos. Ricardo compró otras distintas y gastó 20 pesos en cada una. Si el ratio en la cantidad de cometas entre las de Fran y las de Ricardo es de 3 a 2, ¿cuál es el coste medio de una cometa de las compradas por los dos?"
        + "\n a. 16,8"
        + "\n b. 17,8"
        + "\n c. 17,6"
        + "\n d. 18".toLowerCase()
    );

    if (pregunta8 == "c") {
        alert("¡Tu respuesta fue correcta! Ganaste un punto.");
        let puntajeCorr = 1;
        return puntajeCorr;
    } else {
        alert("Tu respuesta fue incorrecta.");
        let puntajeErr = 0;
        return puntajeErr;
    }    
} 

function pregunta9(){
    let pregunta9 = prompt(
        "9) 4 x 4 - 4 + 4 x 4 = ¿...?"
        + "\n a. 64"
        + "\n b. 28"
        + "\n c. -4"
        + "\n d. -16".toLowerCase()
    );

    if (pregunta9 == "b") {
        alert("¡Tu respuesta fue correcta! Ganaste un punto.");
        let puntajeCorr = 1;
        return puntajeCorr;
    } else {
        alert("Tu respuesta fue incorrecta.");
        let puntajeErr = 0;
        return puntajeErr;
    }   
} 

function pregunta10(){
    let pregunta10 = prompt(
        "10) Si x+3= y, ¿cuánto es 2x + 6?"
        + "\n a. y"
        + "\n b. No se puede determinar."
        + "\n c. 4y"
        + "\n d. 2y".toLowerCase()
    );

    if (pregunta10 == "d") {
        alert("¡Tu respuesta fue correcta! Ganaste un punto.");
        let puntajeCorr = 1;
        return puntajeCorr;
    } else {
        alert("Tu respuesta fue incorrecta.");
        let puntajeErr = 0;
        return puntajeErr;
    }    
} 

function resultadoFinal (){
    let suma = (pregunta1 + pregunta2 + pregunta3 + pregunta4 + pregunta5 + pregunta6 + pregunta7 + pregunta8 + pregunta9 + pregunta10)
    alert ("Tu resultado final es de: " + suma)
}

//Declaración de variables
let nombre = prompt("Primero, ingresá tu nombre.");
let apellido = prompt("Y, ahora, tu apellido.");

//llamadas
hello()
pregunta1()
pregunta2()
pregunta3()
pregunta4()
pregunta5()
pregunta6()
pregunta7()
pregunta8()
pregunta9()
pregunta10()
resultadoFinal()









