//** 10 Por Referencia  **//
//==========================================================

var a = 10;
var b = a;

console.log(a);
console.log(b);

//  //Se pasa por valor.
a = 20;

console.log(a);
console.log(b);

var c = {
    nombre : "Juana"
};

//  //Los objetos siempre se pasa por referencia
var d = c;

console.log("c : ", c);
console.log("d : ", d )
//  // + es de concatenacion, y la coma ya te pone a dispocision el objeto.
console.log("d : " +  d )

c.nombre = "Maria";

console.log("c : ", c);
console.log("d : ", d );
//  // + es de concatenacion, y la coma ya te pone a dispocision el objeto.
console.log("d : " + d );


//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














