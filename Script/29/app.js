//** 28 Objeto boolean **//
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");

var a = true; 
var b = false;

var abol = new Boolean();
console.log(abol.valueOf());

var abol = new Boolean(0);
console.log(abol.valueOf());

var abol = new Boolean(1);
console.log(abol.valueOf());

var abol = new Boolean(true);
console.log(abol.valueOf());

var abol = new Boolean("false");
console.log(abol.valueOf());

var abol = new Boolean(NaN);
console.log(abol.valueOf());

var abol = new Boolean(-1);
console.log(abol.valueOf());

var abol = new Boolean(10);
console.log(abol.valueOf());

//Etc.


//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 2 **");

//  //Lo que hace dentro de la condicion de javascript es que toma
//  //  como TRUE a toda variable que es declarada y ademas tiene
//  //  un valor, ya sea si es de tipo cadena o objeto etc.
var a = true;
var obja = new Boolean(undefined);
var sinValor;
var str = "Hello Boolean";

console.log(a);
console.log(obja);

if( a ){
    console.log("Se imprimio con boolean primitivo");
}

if( obja ){
    console.log("Se imprimio con boolean objeto");
}


if( str ){
    console.log("Se imprimio con cadena");
}


if( sinValor ){
    console.log("Se imprimio sin valor: ", sinValor);
}


//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














