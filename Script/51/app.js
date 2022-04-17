//** 51 Eventos **//
//  //Los eventos no son mas que acciones que hacen que se
//  //  dispare una accion.

//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");

function evento(arg){
    console.log("Me dispare");
    console.log(arg);
}

var objeto = document.getElementById("objDemo");

//  //Le podemos agregar eventos desde javascript.

//  //Se dispara el evento con el sig linea de codigo
//  //  enviamos una escucha al evento keyspress
//  //  y enviara un evento.
objeto.addEventListener("click", evento);
objeto.click();


//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================
