/* console.log("Bienvenidos al desafío complementario") 
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
 */

//--------------------------------

/* class Producto{
    constructor (nombre, precio, stock, codigo){
    this.name = nombre;
    this.price = parseFloat(precio);
    this.stock = parseInt(stock);
    this.code_user = codigo.toUpperCase;
    this.code_promotion = "PROMO20";
    this.discount = 20;
    }
    applyDiscount(){
        this.price = this.price - (this.price * this.discount) / 100;
    }
    validateCode(){
        if (this.code_user == this.code_promotion){
            this.applyDiscount();
            console.log("codigo verificado");
            console.log("el precio del producto es: $" + this.price);
        }else{
            console.log("Error! Código inválido");
        }
    }
}
let nombre = prompt ("ingrese nombre del Producto");
let precio = prompt ("ingrese precio del Producto");
let stock = prompt ("ingrese stock del Producto");
let codigo = prompt ("ingrese código de Promoción del Producto:");

const producto = new Producto(nombre, precio, stock, codigo);
producto.validateCode(); */