//** 24 Arguments **//
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");

var arguments = 10;

function miFuncion(){
    //  //Ojo. todas los elementos en Javascript tienen prototype, 
    //  //  en este caso esta funcion tiene en su prototype la 
    //  //  variable arguments.
    //  //Por lo tanto, deacuerdo a como funcion Javascript, primero 
    //  //  busca la variable arguments dentro de este contexto de la 
    //  //  funcion, y si la encuentra lo imprimir, pero si no la encuentra
    //  //  entonces pasa a buscar a su contexto superior, pero en este caso
    //  //  como si lo encuentra dentro de las variables de prototype, entonces
    //  //  la imprime.
    console.log(arguments);
}


miFuncion();

console.log("*************************************************");
console.log("** Ejemplo 2 **");

var arguments = 10;

function miFuncion2(a, b, c, d){
    //  //Ojo, la variable arguments hace referencia a los valores
    //  //  que se pasan cuando se manda a invocar la funcion.
    console.log(arguments);
}


miFuncion2(10, 20, 30, 40, {}, function(){});

console.log("*************************************************");
console.log("** Ejemplo 3 **");

//  //Validar  que nuestr funcion necesita a fuerzas los cuatro
//  //  parametros para poder realizar una operacion matematica.
//  //Ojo. NaN significa que no es un numero. (not a number)

var arguments = 10;

function miFuncion3(a, b, c, d){
    if(
        arguments.length !== 4
    ){
        console.error("La funcion necesita 4 parametros.");
        return;
    }
    console.log(a + b + c + d);
}

miFuncion3(10, 20, 30);
//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














