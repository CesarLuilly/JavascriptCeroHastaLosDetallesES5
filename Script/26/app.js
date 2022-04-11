//** 26 Polimorfismo en Javascript. **//
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");
//  //No es mas que una funcion que puede recibir diferentes tipos
//  //  de parametros o diferentes tipos de datos.

function determinaDato( a ){
    if(
        a === undefined
    ){
        console.log("A es undefined y no se que hacer...");
    }
    if(
        typeof a === "number"
    ){
        console.log("A es un numero y puedo hacer operaciones con numeros.");
    }
    if(
        typeof a === "string"
    ){
        console.log("A es un texto y puedo hacer operaciones con textos.");
    }
    if(
        typeof a === "object"
    ){
        console.log("A es un objeto.. pero puedo hacer cualquier cosa..");
        if(
            a instanceof Number
        ){
            console.log("A es un objeto numerico.");
        }
    }
}

determinaDato("Cesar");

var b = new Number(3);
determinaDato(b);
determinaDato(b + 10);

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














