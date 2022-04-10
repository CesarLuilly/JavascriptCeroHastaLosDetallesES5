//** Funciones **//
//==========================================================

console.log("*************************************************");
console.log("** Ejemplo 1 **");

var a = 30; 

function primeraFuncion(){
    var a = 20;
    console.log(a);
}

primeraFuncion();

console.log("*************************************************");
console.log("** Ejemplo 2 **");

var b = 30;

function segundaFuncion(){
    console.log(b);
}

segundaFuncion();

console.log("*************************************************");
console.log("** Ejemplo 3 **");

console.log(c);

function tercerFuncion(){
    var c = 40;
    console.log(c);
}

tercerFuncion();
console.log(c);
var c = 30; 
console.log(c);

console.log("*************************************************");
console.log("** Ejemplo 4 **");

var d = 40;

cuartaFuncion();

function cuartaFuncion(){
    console.log(d);
}

console.log("*************************************************");
console.log("** Ejemplo 5 Comprender el alcanze de las variables y su context **");

var e = 10;
console.log("Inicio: ", e);

miFuncion();

console.log("Despues de la funcion: ", e);

function miFuncion(){
    var e = 40;
    console.log("Dentro de la funcion: ", e);
}

console.log("*************************************************");
console.log("** Ejemplo 5 **");
console.log("** Nota. en javascript todas las funciones regresan un valor. **");

var f = 40;

function quintaFuncion(){
    // //NOTA. Todas las funciones devuelven algo, 
    //  // aunque no se les especifique.
}

var f = quintaFuncion();
console.log(f); 

console.log("*************************************************");
console.log("** Ejemplo 6 **");
console.log("** Nota. en javascript todas las funciones regresan un valor. Inclusive, la definicion de la funcion**");

var g = 40;

function sextaFuncion(){
    // //NOTA. Todas las funciones devuelven algo, 
    //  // aunque no se les especifique, 
    //  //  Inclusive, devuelven la definicon de la funcion.

};

var g = sextaFuncion;
console.log(g); 
console.log(g()); 
console.log(sextaFuncion); 

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














