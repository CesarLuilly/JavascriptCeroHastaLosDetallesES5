//** 27 Cuidado con las funciones y su contexto. **//
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");

function crearFunciones(){
    var arr = [];
    var numero = 1;

    arr.push(
        function(){
            console.log(numero);
        }
    );

    return arr;
};

var funciones = crearFunciones();
funciones[0]();

console.log("*************************************************");
console.log("** Ejemplo 2 **");

function crearFunciones2(){
    var arr2 = [];
    var numero2 = 1;

    arr2.push(
        function(){
            console.log(numero2);
        }
    );

    numero2 = 2;
    arr2.push(
        function(){
            console.log(numero2);
        }
    );

    numero2 = 3;
    arr2.push(
        function(){
            console.log(numero2);
        }
    );

    return arr2;
};

var funciones2 = crearFunciones2();
funciones2[0]();
funciones2[1]();
funciones2[2]();

console.log("*************************************************");
console.log("** Ejemplo 3 **");

function crearFunciones3(){
    var arr3 = [];
    var numero3 = 1;

    arr3.push(
        (
            function(numero){
                return function(){
                    console.log(numero);
                }
            }
        )(numero3)
    );

    numero3 = 2;

    arr3.push(
        (
            function(numero){
                return function(){
                    console.log(numero);
                }
            }
        )(numero3)
    );

    numero3 = 3;

    arr3.push(
        (
            function(numero){
                return function(){
                    console.log(numero);
                }
            }
        )(numero3)
    );

    return arr3;
}

var funciones3 = crearFunciones3();
funciones3[0]();
funciones3[1]();
funciones3[2]();

console.log("*************************************************");
console.log("** Ejemplo 4 **");

function crearFunciones4(){
    var arr4 = [];

    for (let numero4 = 1; numero4 <= 3; numero4++) {
        
        arr4.push(
            (
                function(numero){
                     return function(){
                         console.log(numero);
                     }
                }
            )(numero4)
        );
    }

    return arr4;
};

var funciones4 = crearFunciones4();
funciones4[0]();
funciones4[1]();
funciones4[2]();

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














