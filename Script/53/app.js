//** 53 Evento OnSubmit y parametros URL **//

//  //El método onsubmit se puede utilizar antes de que el 
//  //  formulario sea enviado al servidor, se dispara justo 
//  //  milisegundos antes de que el formulario sea enviado 
//  //  al servidor.

//  //Es recomendable que antes de hacer un posteo de datos 
//  //  sea procesado por javascript para que tenga 
//  //  validaciones mínimas necesarias del lado del cliente 
//  //  para que el servidor muestre trabajo lo menos posible.

//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");

function validar(){
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;

    if(
        nombre.length < 1
    ){
        return false;
    }

    if(
        apellido.length < 1
    ){
        return false;
    }

    return true;
}

//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 2 Recuperar los parametros de una URL **");

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================
