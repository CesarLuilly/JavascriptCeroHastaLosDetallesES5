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

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














