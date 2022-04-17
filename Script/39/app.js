//** 39 Manejo de errores en Javascript. **//
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");

try {
    var a = 100;
    console.log("El valor de a : ", a);
}catch (e){
//  //La e toma el valor del objeto error
//  //  que se genera en tiempo de ejecucion.
    console.log( e );
}finally {
    console.log("Finalmente..");
}

//  //Nota.- Si no se utiliza el Catch, tiene que ir al Finally
//  //  a fuerzas.
//  //El Finally significa que ejecute el try, y ademas
//  //  independientemente de si manda error o no, siempre
//  //  se ejecutara el finally.

console.log("*************************************************");
console.log("** Ejemplo 2 **");

try {
    var b = 100;
    console.log("El valor de b : ", b);

    //  //Lo que estoy haciendo es lanzar un error.
    if(b == 100){
        throw "Que mal";
    }else{
        throw "oh oh!";
    }

} catch (e) {
    //  //La e toma el valor del objeto error
    //  //  que se genera en tiempo de ejecucion.
    if(e == "Que mal"){
        console.log("Error de tipo 1");
    }else if(e == "oh oh!"){
        console.log("Error de tipo 2");
    }
    console.log(e);
}finally{
    console.log("Finalmente..");
}

console.log("*************************************************");
console.log("** Ejemplo 3 **");
//  //Lanzando un error mas elaborado a partir de un Objeto.

try {
    throw new Error("Error de tipo 1");

    console.log("Esta parte nunca se ejecuta.");
} catch (e) {
    
    console.log(e);
    console.log(e.message);
}finally{
    console.log("Finalmente..");
}

console.log("*************************************************");
console.log("** Ejemplo 4 **");
//  //El Throw tambien puede lanzar lo que sea, es decir funciones
//  //  objetos, variables, funciones, tipos primitivos, 
//  //  lo que sea.

try {
    throw {
        nombreError: "Error tipo 1",
        accion: "echarle agua al servidor",
        codeerror:400
    }

    console.log("Esta parte nunca se ejecuta.");
} catch (e) {
    
    console.log(e);
    console.log(e.nombreError);
}finally{
    console.log("Finalmente..");
}

console.log("*************************************************");
console.log("** Ejemplo 5 Algo que se puede elaborar para manejo de errores **");
//  //Ejemplo de algo que se puede elaborar para manejo de errores.

try {
    throw 1;
    console.log("Esta parte nunca se ejecuta.");

} catch (e) {
    
    registroErrores(e);
}finally{
    console.log("Finalmente..");
}

function registroErrores(e){
    //  //Este puede servir para registrar los errores en una DB
    //  //  o mandarlos a traves de una URL, etc.
    var ahora = new Date();
    console.log("Se registro un error: ", e, " a las ", ahora);
}

console.log("*************************************************");
console.log("** Ejemplo 6 Cuando truena en un archivo, no significa que va a detener la ejecucion de los otros archivos de javascript **");
//  //Cuando truena en un archivo, no significa que va a detener 
//  //  la ejecucion de los otros archivos de javascript

//  //Mandamos un error y como no esta dentro de un Try-Catch, la aplicacion
//  //  truena para este archivo.
throw 'Error!!!';

try {
    throw {
        nombreError: "Error tipo 1",
        accion: "echarle agua al servidor",
        codeerror:400
    }

    console.log("Esta parte nunca se ejecuta.");
} catch (e) {
    
    console.log(e);
    console.log(e.nombreError);
}finally{
    console.log("Finalmente..");
}
//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














