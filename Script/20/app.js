//** 20 Funciones anonimas. **//
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");

//  //Para evitar que nuestro codigo sea accidentalmente manipulado, 
//  //  por otras secciones de codigo y todas interactuando con el
//  //  objeto window.

var a = 10;

console.log( a );

function cambiarA(){
    a = 20;
}

cambiarA();

console.log(a);

console.log("*************************************************");
console.log("** Ejemplo 2 **");
//  //COMO EVITAR QUE NUESTRAS VARIABLES SEAN MANIPULADAS??
//  //A traves de una funcion anonima nosotros podemos encapsular
//  //  todo lo que este dentre de la funcion.
(function(){
    //  //Sintaxis de una funcion anonima.

    var a = 10;
    console.log(a);

    function cambiarAhoraA(){
        a = 20;
        console.log("valor de a dentro de la funcion ", a);
    };

    cambiarAhoraA();

    console.log(a);
    //  //Hay que recordar que toda funcion se invoca con 
    //  //  parentesis ().
})();

console.log("*************************************************");
console.log("** Ejemplo 2 **");
//  //Creamos una funcion anonima en el momento de ejecucion.

function ejecutarFuncion( fn ){
    if(
        fn() === 1
    ){
        return true;
    }else{
        return false;
    }
};

console.log(
    ejecutarFuncion(
        function(){
            console.log("Funcion anonima");
            return 0;
        }
    )
);



//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














