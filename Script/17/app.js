//** Palabra reservada new **//
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");

var juan = {};
console.log(juan);

console.log("*************************************************");
console.log("** Ejemplo 2 **");

//  //Declaramos una funcion para utilizarlo como un objeto.
function Persona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 30;

    this.imprimirPersona = function(){
        return this.nombre + " " + this.apellido; 
    }
}

//  //Utilizamos new para crear el objeto.
var juan = new Persona("Juan", "Mendoza");
console.log(juan.imprimirPersona());

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














