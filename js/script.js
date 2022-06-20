console.log("Bienvenidos al desafío complementario")
let nombre = prompt("Ingresá tu nombre.");
let apellido = prompt("Ingresá tu apellido.");
alert ("Hola, " + nombre + " " + apellido + ". Este es un contador de cumpleaños, te muestra cuántos años cumplís según tu año de nacimiento.");

let añoNacimiento = parseInt(prompt("Ingresá tu año de nacimiento."));
let max = 2050;

for (let i = añoNacimiento; i<= max; i++){
    alert ("Naciste en el año " + i + ".");
    for (let e = 0; e<=100; e++){
        alert ("En el año " + i++ + " " + "tenías " + e + " años.");
    } 
}



