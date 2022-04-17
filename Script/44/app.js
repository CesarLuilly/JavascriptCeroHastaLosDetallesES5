//** 44 if else **//
//==========================================================
console.log("** Ejemplo 1 **");

var a = 10;
var b = 20;
var c = 0;

if(
    a > b
){
    c = a;
}else{
    c = b;
}

console.log(c);

c = (a > b ) ? a : b;

console.log(c);

//==========================================================
console.log("** Ejemplo 2 **");

var e = 10;
var f = 20;
var g = 0;

var g = (e > f ) ? function(){
    console.log("E es mayor que F");
    return e;
}() : function(){
    console.log("F es mayor que E");
    return f;
}();

console.log(g);

//==========================================================
console.log("** Ejemplo 3 Aplicacion**");
//  //Esto es muy util cuando hacemos funciones que esperan 
//  //  parametros.

function getNombre(nombre){
    var nomb = nombre || "<sin nombre>";
    var ex1 = null || "<sin apellido>";
    var ex2 = null || null || undefined;
    var ex3 = null || null || null;

    console.log(nomb);
    console.log(ex1);
    console.log(ex2);
    console.log(ex3);
}

getNombre();

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================
