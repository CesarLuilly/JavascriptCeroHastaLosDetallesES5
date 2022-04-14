//** 33 Objeto Math**//
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");

var PI = Math.PI;
var E = Math.E;

console.log("Imprimo PI ", PI );
console.log("Imprimo E ", E );

var num1 = 10.456789;

console.log("Imprimir numero1 ", num1)
console.log("Round de numero1: ", Math.round(num1 * 100 ) / 100);
console.log("Le quito decimales a numero1:", Math.floor(num1));

function randomEntre(min, max){
    return Math.floor(Math.random() * (max-min + 1) + min);
}

console.log("Rando entre 500 y 100 : ", randomEntre(500, 100));

console.log("Raiz cuadrada : ", Math.sqrt(10));

console.log("Potencia de 5 a la cubica: ", Math.pow(5, 3));
//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














