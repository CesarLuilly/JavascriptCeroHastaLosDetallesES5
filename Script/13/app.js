//** Parametros para las funciones. **//
//==========================================================

//  //En las funciones se le pueden mandar primitivos, objetos, 
//  //   o funciones como parametros.
console.log("*************************************************");
console.log("** Pasando tipos primitivos. **");

//  //En javascript no mandaria error si no se le enviar un 
//  //  parametro cuando es llamado.
function imprimir(nombre, apellido){
    if(
        //  //Comparando valor y tipo.
        apellido === undefined
    ){
        apellido = "default"
    }
    console.log(nombre + " " + apellido);
}

imprimir();
imprimir("cesar");
imprimir("cesar", "luilly");

var apellido = "otro";
function imprimir2(nombre){
    console.log(nombre + " " + apellido);
}

imprimir2();

console.log("*************************************************");
console.log("** Pasando Objetos **");
//  //Hay que recordar que los objetos se pasan por referencia.

function imprimir3( persona){
    console.log(persona.nombre + " " + persona.apellido);
    persona.nombre = "CesarNuevo"
};

var obj = {
    nombre:"Juan",
    apellido:"Padilla"
};

imprimir3(obj);

console.log(obj.nombre);

console.log("*************************************************");
console.log("** Pasando funcion como parametro **");
//  //En realidad las funciones son objetos, solo que para que
//  //  no sea redundante, se le llaman funciones.

function imprimir4( fn ){
    fn();
}

//  //Pasando una funcion anonima.
function imprimir5( fn ){
    fn();
}

imprimir5( function(){
    console.log("Se le paso una funcion anonima a la funcion.");
});

//  //Pasando una funcion explicita.
var miFuncion = function() {
    console.log("Mi funcion explicita.");
};

imprimir5(miFuncion);

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














