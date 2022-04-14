//** 30.Objeto String **//
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");

//  //En Javascript un string es un objeto.
var a = new String("Cesar");

//  //a[0] -- Esto hace pensar a la gente de que estamos manejando
//  //  un arreglo, pero no es un arreglo, es un objeto, 
//  //  en donde el nombre de las propiedades esta de manera
//  //  numerica.

console.log(a);
console.log(a[0]);

//  //Al imprimir la variable de "a" se puede observar que "a"
//  //  es un objeto de tipo string.
//  //Javascript construye de sus propiedades numeradas, 0,1, 2,etc.
//  //  y ademas otras propiedades implicitas como lengt, etc.

var Persona = {
    0: "Cesar",
    1: "Ces",
    2: function(){
        console.log(this.cero);
    },
    nacionalidad: "Mexicano"
}

//  //Haciendo una comparacion con un objeto que nosotros
//  //  creamos podemos observar que efectivamente a un 
//  //  objeto se le puede añadir propiedades numericas
//  //  y no manda error.

console.log(Persona[0]);
console.log(Persona["0"]);
console.log(Persona["nacionalidad"]);
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 2 **");

var b = new String("Fernando Herrera.");
console.log(b);

console.log(b.toUpperCase());
console.log(b.toLowerCase());

var i = b.indexOf("Herrera");
console.log("La letra es", i);

var i = b.indexOf("n");
console.log("La letra es", i);

var nombre = b.substr(0, b.indexOf(" "))
console.log(nombre);

//  //Los String tambien tienen funciones parecidas a los de los arreglos.
var split = b.split(" ");
console.log(split);
console.log(split.length);

//  //Hay funciones viejas que antes se usaban mas, 
//  //  y ahora ya no se usan mucho

//  //Esto es lo que hace es escribiti en la pagina donde esta el codigo
//  //  el valor de lo que esta adentro del objwrit.
document.write(b.italics());

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














