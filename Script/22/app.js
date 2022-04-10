//** 22 Arreglos **//
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");
//  //En javascript, los arreglos siempre son una coleccion de objetos.

//  //Las dos siguientes declaracion, ambos son equivalente.
var arr1 = new Array();
var arr2 = [];

var arr3 = [5,4,3,2,1];
console.log(arr3);

//  //En otros lenguajes de programacion mandaria error por desbordamiento.
console.log(arr3[0], arr3[1], arr3[200]);

arr3.reverse();
console.log("Uso de metodo reverse en arreglo", arr3)

arr3 = arr3.map(
    function(elem){
        elem *= elem;
        return elem;

    }
);
console.log("despues de ejecuta .map", arr3);

arr3 = arr3.map(Math.sqrt);
console.log("Despues de arr3.map con sqrt", arr3);

arr3 = arr3.join("|");
console.log("Despues de arr3.join", arr3);

arr3 = arr3.split("|");
console.log("Despues de arr3.split", arr3);

arr3.push("6")
console.log("Despues de arr3.push('6')", arr3);

arr3.unshift("0");
console.log("Despues de arr3.unshift('0')", arr3);

console.log("Despues de arr3.toString()", arr3.toString());

var elimine = arr3.pop();
console.log("arr3.pop()", arr3);

arr3.splice(1,0, "10", "20", "30");
console.log("Despues de arr3.splice----", arr3);

arr3 = arr3.slice(0, 2);
console.log("Despues de arr3.slice----", arr3);


//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














