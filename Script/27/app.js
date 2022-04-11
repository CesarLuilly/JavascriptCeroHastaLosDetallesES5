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
//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














