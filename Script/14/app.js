//** 14 retorno de las funciones. **//
//==========================================================
console.log("*************************************************");
console.log("** Estas Funciones puede retornar datos primitivos, objetos y hasta funciones **");

function creaFuncion(){
    return function(){
        console.log("Me crearon.")
    }
}

var nuevaFuncion = creaFuncion();
nuevaFuncion();

console.log("*************************************************");
console.log("**Ejemplo 2. **");

function crearPersona(nombre, apellido){
    return {
        nombre:nombre,
        apellido: apellido
    }
}

var persona = crearPersona("Maria");

function creaFuncion2(){
    return function( nombre ){
        console.log("Me creo " + nombre);
    }
}

var nuevaFuncion2 = creaFuncion2();
nuevaFuncion( "Cesasr");

console.log("*************************************************");
console.log("**Ejemplo 3. **");

function creaFuncion3(){
    return function( nombre ){
        console.log("Me creo "+ nombre);
        
        return function(){
            console.log("Segunda funcion.");
        }
    }
}

var nuevaFuncion3 = creaFuncion3();

var segundaFuncion = nuevaFuncion3("Cesar");

segundaFuncion();

console.log("*************************************************");
console.log("**Ejemplo 4. **");

function miFuncionMain(){
    console.log("Primera funcion.");

    return function(nombre){
        console.log("Retorno de la segunda funcion con parametro " + nombre);

        return function(part1){
            console.log("Retorno de la tercera funcion, ", part1);

        };
    };
};

var funMain = miFuncionMain();
var segundaFuncionFromMain = funMain("Cesar");
var tercerFuncionFromSegunda = segundaFuncionFromMain("Hello Javascript."); 


//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














