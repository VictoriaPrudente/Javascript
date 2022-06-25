//declaración de funciones
function hello(){ //funcion bienvenida
    let nombre = prompt("Primero, ingresá tu nombre.");
    let apellido = prompt("Y, ahora, tu apellido.");
    if ((nombre && apellido) != ""){
        alert (
            "Hola, " + nombre + " " + apellido + ". Bienvenido/a al test psicológico del bosque."
            );
        alert (
            nombre + ", anota la primera respuesta que te venga a la mente puesto que es muy importante descubrir lo que piensa nuestro subconsciente, si le damos demasiadas vueltas es probable que acabe respondiendo la parte más consciente de nuestra mente.  "
        );
    } else while (nombre === "") {
        let error = "Tenés que ingresar un nombre y un apellido.";
        alert(error);
        nombre = prompt("Ingresá tu nombre");
        apellido = prompt("Ingresá tu apellido");
    }
    return nombre;
}

function pregunta1(){
    let respuesta1 = prompt(
        "Vas a darte un paseo por el bosque: ¿cómo es el camino? \n¿la vegetación está ordenada y el camino parece recto?"
    );
    while (respuesta1 === "") {
        respuesta1= prompt (
            "Tenés que ingresar una respuesta válida. \n \nVas a darte un paseo por el bosque: ¿cómo es el camino? \n¿la vegetación está ordenada y el camino parece recto? "
            );
    }
    return respuesta1; 
}

function pregunta2(){
    let respuesta2 = prompt(
        "¿Estás caminando solo/a o acompañado/a? \n¿quién te acompaña?"
    );
    while (respuesta2 === "") {
        respuesta2= prompt (
            "Tenés que ingresar una respuesta válida. \n \n¿Estás caminando solo/a o acompañado/a? \n¿quién te acompaña?"
            );
    }
    return respuesta2;
}  

function pregunta3(){
    let respuesta3 = prompt(
        "De pronto, te encuentras con un animal: ¿qué animal es?"
    ); 
    while (respuesta3 === "") {
        respuesta3= prompt (
            "Tenés que ingresar una respuesta válida. \n \nDe pronto, te encuentras con un animal: ¿qué animal es?"
            );
    }
    return respuesta3;
} 

function pregunta4(){
    let respuesta4 = prompt(
        "¿Cómo te relacionas con él? En este apartado es importante que describas bien tu interacción con el animal."
    );
    while (respuesta4 === "") {
        respuesta4= prompt (
            "Tenés que ingresar una respuesta válida. \n \n¿Cómo te relacionas con él? En este apartado es importante que describas bien tu interacción con el animal."
            );
    }
    return respuesta4;
} 

function pregunta5(){
    let respuesta5 = prompt(
        "Sigues caminando por el bosque y de pronto el camino se abre. A lo lejos puedes ver una casa encantadora, la casa de tus sueños. ¿Cómo es esa casa? Describe su tamaño, el número de ventanas y si tiene rejas o no. "
    );
    while (respuesta5 === "") {
        respuesta5= prompt (
            "Tenés que ingresar una respuesta válida. \n \nSigues caminando por el bosque y de pronto el camino se abre. A lo lejos puedes ver una casa encantadora, la casa de tus sueños. ¿Cómo es esa casa? Describe su tamaño, el número de ventanas y si tiene rejas o no. "
            );
    }
    return respuesta5;
} 

function pregunta6(){
    let respuesta6 = prompt(
        "Decides entrar en la casa, sin miedo. Avanzas y la primera habitación que te encuentras es el salón. Dicho salón tiene una mesa en medio. ¿Cómo es la mesa? ¿Qué hay encima y alrededor de ella?"
    );
    while (respuesta6 === "") {
        respuesta6= prompt (
            "Tenés que ingresar una respuesta válida. \n \nDecides entrar en la casa, sin miedo. Avanzas y la primera habitación que te encuentras es el salón. Dicho salón tiene una mesa en medio. ¿Cómo es la mesa? ¿Qué hay encima y alrededor de ella?"
            );
    }
    return respuesta6;
} 

function pregunta7(){
    let respuesta7 = prompt(
        "Avanzas y terminas saliendo de la casa por la puerta de atrás, antes de irte te das cuenta de que alguien se ha dejado una taza en el suelo. ¿De qué material es la taza? ¿Qué haces con esa taza?"
    );
    while (respuesta7 === "") {
        respuesta7= prompt (
            "Tenés que ingresar una respuesta válida. \n \nAvanzas y terminas saliendo de la casa por la puerta de atrás, antes de irte te das cuenta de que alguien se ha dejado una taza en el suelo. ¿De qué material es la taza? ¿Qué haces con esa taza?"
            );
    }
    return respuesta7;
} 

function pregunta8(){
    let respuesta8 = prompt(
        "Dejas atrás la casa y vuelves al bosque, al adentrarte un poco descubres que hay un cuerpo de agua que te impide seguir adelante. ¿Qué cuerpo de agua es? ¿Cómo lo haces para cruzarlo? "
    );
    while (respuesta8 === "") {
        respuesta8= prompt (
            "Tenés que ingresar una respuesta válida. \n \nDejas atrás la casa y vuelves al bosque, al adentrarte un poco descubres que hay un cuerpo de agua que te impide seguir adelante. ¿Qué cuerpo de agua es? ¿Cómo lo haces para cruzarlo? "
            );
    }
    return respuesta8;
} 

function pregunta9(){
    let respuesta9 = prompt(
        "Has llegado al final del camino y ya no queda más bosque por recorrer, ¿mirarías hacia atrás? "
    );
    while (respuesta9 === "") {
        respuesta9= prompt (
            "Tenés que ingresar una respuesta válida. \n \nHas llegado al final del camino y ya no queda más bosque por recorrer, ¿mirarías hacia atrás? "
            );
    }
    return respuesta9;
}   

//Ejecución
let namee = hello();
let respuesta1 = pregunta1();
let respuesta2 = pregunta2();
let respuesta3 = pregunta3();
let respuesta4 = pregunta4();
let respuesta5 = pregunta5();
let respuesta6 = pregunta6();
let respuesta7 = pregunta7();
let respuesta8 = pregunta8();
let respuesta9 = pregunta9();

alert(namee + ", una vez recorrido todo el camino imaginario y finalizado el test psicoanalítico del bosque, llega el momento de interpretar nuestras respuestas y descubrir qué es lo que esconde nuestro inconsciente:");
alert ("El camino inicial del bosque. " 
        + "\n Tu respuesta fue: "+ respuesta1 
        + "\n Representa el modo en el que ves el mundo que te rodea, si los árboles forman un caminito ordenado significa que ves que tu vida va en la dirección que deseas y vislumbras tu futuro de una manera positiva.");
alert ("La persona que te acompaña en el camino. " 
        + "\n Tu respuesta fue: "+ respuesta2 
        + "\n Es aquella que quieres que esté a tu lado en todo momento, es la persona más importante de tu vida a día de hoy. Si por lo contrario has decidido caminar solo/a, significa que no ves que nadie pueda acompañarte en esta etapa de tu vida. ");
alert ("El animal que te encuentras." 
    + "\n Tu respuesta fue: "+ respuesta3 
    + "\n Es la representación irracional de tus problemas: no importa como es el animal en la realidad, importa cómo te lo has imaginado. El tamaño y la agresividad que representaba son dos de los elementos más importantes.");
alert ("El modo en el que interaccionas con el animal." 
    + "\n Tu respuesta fue: "+ respuesta4 
    + "\n Es un indicador de cómo resuelves tus problemas. Si el animal te atacaba probablemente significa que sientes que tus problemas dañan tu estabilidad mental, si tu interacción se basa en el trato y la comprensión probablemente signifique que tratas de resolver tus conflictos de forma asertiva. Finalmente, si tu decisión ha sido ignorar al animal, representa que intentas evitar enfrentarte a los obstáculos de la vida. ");
alert ("El tamaño de la casa." 
    + "\n Tu respuesta fue: "+ respuesta5 
    + "\n Representa las ambiciones y capacidades para resolver contratiempos, si tiene muchas ventanas refleja una alta extraversión. En cambio, si tiene pocas ventanas y verjas suele ser señal de inseguridad y timidez. ");
alert ("La mesa." 
    + "\n Tu respuesta fue: "+ respuesta6 
    + "\n Si la mesa no estaba rodeada de personas y no había comida o flores en ella suele significar que no estás disfrutando de la vida o que, en este preciso instante, eres infeliz. ");
alert ("El material de la taza que te has encontrado en el suelo." 
    + "\n Tu respuesta fue: "+ respuesta7 
    + "\n Representa cómo ves la relación con la persona de la primera pregunta: si la taza es de hierro o cerámica significa que ves una relación duradera y estable, si te has imaginado una taza de plástico o de papel indica que percibes poca estabilidad en la relación. Lo que has decidido hacer con la taza es una representación inconsciente de lo que quiere hacer con la relación con la persona de la primera pregunta. ");
alert ("La naturaleza del cuerpo de agua y su envergadura." 
    + "\n Tu respuesta fue: "+ respuesta8 
    + "\n (Un río caudaloso o un pequeño embalse) representa el tamaño y la intensidad de tu deseo sexual. Si decides mojarte para atravesar el cuerpo significa que le das mucha importancia al sexo en tu vida. ");
alert ("Mirar hacia atrás al finalizar tu camino." 
    + "\n Tu respuesta fue: "+ respuesta9 
    + "\n Finalmente, si has decidido mirar hacia atrás al finalizar tu camino puede significar dos cosas: en primer lugar, le das mucha importancia al pasado y, en segundo lugar, esperas tener todo aquello que has vislumbrado durante el camino. ");

alert("Has finalizado el Test del bosque. \n Dicho test nos hace pensar acerca de nuestros problemas y cómo nos enfrentamos a ellos. Tal vez, el resultado te haya resultado extraño. Lo importante es tomarse un tiempo después de realizarlo para pensar acerca de nuestras respuestas. Es importante comentar que las técnicas del psicoanálisis no están validadas como herramientas diagnósticas, por lo tanto, si creemos que tenemos algún tipo de psicopatología o problema en nuestra salud mental, será primordial acudir a un especialista.")








