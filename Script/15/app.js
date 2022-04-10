//** 15 Funciones de primera clase. **//
//==========================================================
//  //Hay que recalcar que todo lo que lleva {} es un objeto, 
//  //  por lo tanto como una funcion lleva llaces se le dise 
//  //  que es un objeto.

function a(){
    console.log("Funcion a");

}

a();

a.nombre = "Cesar";
console.log(a.nombre);

//  //Los objetos ya tienen unas propiedades definidas
//  //  y algunas podrian ser sobreescritas y otras no.0
//  //Lo recomendable es que ninguna se sobreescriba.
a.name = "nuevo nombre";
a.apply = "nuevo nombre en apply";
console.log(a.name);
console.log(a.apply);

//  //A las funciones se le puede poner cualquier cosa que se 
//  //  le pueda poner a un objeto, como propiedades y 
//  //  metodos y objetos dentro.

//Comprobando que una funcion es un objeto.
a.direccion = {
    pais: "Costa Rica",
    ciudad: "San Jose",
    edificio: {
        piso: "8vo",
        nombre: "Edificio"
    }
}

console.log(a.direccion);


//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














