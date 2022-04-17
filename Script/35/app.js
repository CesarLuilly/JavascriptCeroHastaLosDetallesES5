//** 35 Expresiones Regulares Parte 2 **//
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");

//  //Aplicacion de las expresiones regulares.
//  //  1.- Encontrar cuantos diptongos hay en una cadena.
//  //  2.- Separar un texto en grupos de 2.
//  //  3.- Tomar solo la parte numerica y respuesta de una cadena.

//  //Pagina Recomendada para aprender expresiones regulares.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions

var texto = "Aeropuerto";
console.log(texto);

//  //Buscar diptongos.
var arr = texto.match(/[aeiou]{2, 2}/ig);
console.log("Buscar diptongos ", arr);

console.log("*************************************************");
console.log("** Ejemplo 2 **");

//  //Separar el texto en grupos de 2.
var arr = texto.match(/\w{2,2}/ig);
console.log("Separar el texto en grupos de 2", arr);

console.log("*************************************************");
console.log("** Ejemplo 3 **");

var texto = "La respuesta de la suma es : 45 + 60 = 105";
console.log(texto);

//  //Necesitamos obtener la parte de los numeros.
var arr = texto.match(/[0-9]{1,}/g);
console.log("Necesitamos obtener la parte de los numeros", arr);

console.log("*************************************************");
console.log("** Ejemplo 4 **");

//  //Necesitamos obtener la parte de los numeros.
var arr = texto.match(/respuesta|\d{1,}/g);
console.log("Otra Solucion a -> Necesitamos obtener la parte de los numeros", arr);
//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














