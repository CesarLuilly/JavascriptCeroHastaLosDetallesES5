//** 46 Json **//
//==========================================================
console.log("** Ejemplo 1 **");

var objetoJS = {
    nombre: "Cesar",
    edad : 24,
    imprimir: function(){
        console.log(this.nombre + " " + this.edad);
    }
};

console.log("Objeto literal", objetoJS);

//  //Ahora si yo necesito pasar el objeto a JSON.
//  //Aqui ya no se pasan las funciones que estan dentro del
//  //  objeto.
var jsonString = JSON.stringify(objetoJS);
console.log("Conversion de OBJ a json", jsonString);

//  //Si ahora el JSON quiero pasarlo a un objeto para 
//  //  poder trabajar en javascript.

var objetoDesdeJSON = JSON.parse(jsonString);
console.log("Conversion de Json a objeto de Javascript", objetoDesdeJSON);

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================
