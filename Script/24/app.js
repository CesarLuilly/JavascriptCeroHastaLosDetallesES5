//** 25 Sobrecarga de parametros. **//
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");

//  //Funciones que tienen el mismo nombre pero con diferentes
//  //  parametros.

//  //Nota importante. Cuando Javascript barre el codigo, lo que 
//  //  hace es lee la funcion numero1.
//  //Cuando lee la funcion numero 2 sobreescribe a la funcion 
//  //  numero 1, y cuando lee la funcion numero 2 sobreescribe 
//  //  a la funcion numero 2 y por lo tanto solo se queda con 
//  //  la funcion numero 3.
function crearProducto(){

}

function crearProducto(nombre){

}

function crearProducto(nombre, precio){

}

//  //COMO SOLUCION A ESTE TIPO DE PROBLEMAS.
function crearProductoNuevo(nombre, precio){
    nombre = nombre || "Sin nombre";
    precio = precio || 0;
    console.log("Producto: ", nombre, " Precio: ", precio);
}

function crearProducto100(nombre){
    crearProductoNuevo(nombre, 100);
}

function crearProductoCamiseta(precio){
    crearProductoNuevo("Camiseta", precio);
}

crearProductoNuevo("Lapiz");
crearProducto100("Corrector");
crearProductoCamiseta(75);

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














