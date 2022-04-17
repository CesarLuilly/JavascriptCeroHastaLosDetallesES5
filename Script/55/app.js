//** 55 USE SCRICT - Modo escricto **//
//  //Hemos visto que javascript permite muchas cosas.
//  //El modo escricto es una característica adicional 
//  //  pero que no deberíamos confiar en ella al 100% 
//  //  ya que muchos navegadores lo interpretan de 
//  //  manera diferente.

//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");
console.log("** Se comento con fines practicos.**");


// //  //NOTA. SI PONEMOS EL MODO ESCRITO EN LA PARTE SUPERIO 
// //  //  DEL ARCHIVO, TODOS LOS ARCHIVOS POSTERIORES A JAVASCRIPT 
// //  //  SE LES VA A APLICAR EL MODO ESCRICTO, INCLUSO AUN 
// //  //  SI SE UTILIZAN ARCHIVOS DE TERCEROS,
// "use strict"
// nombre = "Fernando";
// console.log(nombre);

//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 2 **");
console.log("** Se comento con fines practicos.**");

//  //El use strict en este caso solo es aplicado a nivel
//  //  de contexto, por lo tanto solo es aplicado en el contexto
//  //  de la funcion.

// function getNombre(){
//     "use strict";

//     nombre = "Cesar";
//     return nombre;
// }

// var nombre2 = "Fernando";
// console.log(nombre2);

// console.log( getNombre());

//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 3 **");
//  //Es muy importante que si se usa el modo escricto este
//  //  encapsulado, no hay que dejarlo al principio del 
//  //  archivo, ya que nos daria muchos problemas.

//  //Creamos una funcion anonima.
(
    function(){
        "use strict";

        function getNombre(){

            //  //VA a tronar ya que estamos utilizando el modo
            //  //  escricto.
            nombre2 = "Cesar";
            return nombre3;
        }
        
        var nombre1 = "Fernando";

        console.log(nombre1);
        console.log(getNombre());
    }
)();


//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================
