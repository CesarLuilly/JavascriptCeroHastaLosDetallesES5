//** 34 Expresion Regulares **//
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");
//  //Hay dos maneras de definir una expresion regular.
//  //1.- La explicita usando el constructo.
//  //2.- Usando la literal.

//  //Tanto reg1 como reg2 da lo mismo.
var reg1 = RegExp("a");
var reg2 = "/a/";

var texto = "Hola mundo";
var texto2 = "Hola mundo 21345";
var texto3 = "Hola mundo 132450";
//  //El math regresa un arreglo si y solo si
//  //  por lo menos aparecio una ves nuestra evaluacion.

//  //Si la palabra coincide con la expresion
//  //  regular va a regresar un arreglo,
//  //  de caso contrario va a mandar un nulo.

var arr = texto.match(reg1);
console.log("Aplicando la Expresion Regular",arr);

console.log("*************************************************");
console.log("** Ejemplo 2 **");
//  //( ^ )  Lo que hace es que busque en el texto en la primera
//  //  posicion, a ver si encuentra la "a" en el siguiente ejemplo.

//  //En este ejemplo no va a encontrar ninguna, porque la a no esta
//  //  al principio.
var arr = texto.match(/^a/);
console.log("Busco la 'a' en la primera posicion de la cadena",arr);

arr = texto.match(/^H/);
console.log("Busco la 'H' en la primera posicion de la cadena",arr);

console.log("*************************************************");
console.log("** Ejemplo 3 **");
//  //( $ ) Lo que hace es buscar la “ a “ al final de la cadena de 
//  //  texto.

var arr = texto.match(/a$/);
console.log("Busco la 'a' al final de la cadena",arr);

arr = texto.match(/o$/);
console.log("Busco la 'o' al final de la cadena",arr);

console.log("*************************************************");
console.log("** Ejemplo 4 **");
//  //( … )Lo que hace es buscar cualquier carácter, los tres 
//  //  primeros tres caracteres.

var arr = texto.match(/.../);
console.log("Tomo los primeros 3 caracteres de la cadena",arr);

console.log("*************************************************");
console.log("** Ejemplo 5 **");
//  //( ^.O ) Pimer carácter no importa que carácter sea pero 
//  //  sigue un O(primera posición, cualquier carácter, sigue un O)

var arr = texto.match(/^.o/);
console.log("En la primera posicion esta cualquier caracter, pero despues tiene que venir a 'o'",arr);

console.log("*************************************************");
console.log("** Ejemplo 6 **");
//  //[0-9] puedo definir un rango. Busca el primer elemento que este dentro de ese rango]

var arr = texto2.match(/[0-9]/);
console.log("Busca el primer numero dentro del rango 0-9",arr);

console.log("*************************************************");
console.log("** Ejemplo 7 **");
//  //[026789] Vamos a buscar el primer elemento que tenga algun valor de lo
//  //  que esta encerrado en corchetes.

var arr = texto3.match( /[026789]/ );
console.log("Busca el primer elemento que coincida con 026789",arr);


console.log("*************************************************");
console.log("** Ejemplo 8 **");
//  //Busca el primer elemento que este dentro ese rango
//  //  Busca de a - z minuscula o tambien de A - Z Mayusculas.

var arr = texto3.match( /[a-zA-Z]/ );
console.log("Busca el primer elemento que coincida con 026789",arr);

console.log("*************************************************");
console.log("** Ejemplo 9 **");

var texto4 = "Hola Mundo. 9";
//  //Va a buscar siempre y cuando se cumpla de que.

//Al inicio debe llevar una H y va a buscar aeiou.
var arr = texto4.match( /^H[aeiou]/ );
console.log(" --> ",arr);

console.log("*************************************************");
console.log("** Ejemplo 10 **");

//  //Quiero cualquier vocar seguido de cualquiere caracter
//  //  pero que este al final.

var arr = texto4.match( /[aeiou.$]/ );
console.log(" --> ",arr);

console.log("*************************************************");
console.log("** Ejemplo 11 **");
//  //Cualquier vocal seguido de cualquier caracter.

var arr = texto4.match( /[aeiou]./ );
console.log(" --> ",arr);

console.log("*************************************************");
console.log("** Ejemplo 12 **");
//  //Busca cualquier separacion que haya en mi texto.

var arr = texto4.match( /\s/ );
console.log(" Busca cualquier separacion que haya en el texto ",arr);

console.log("*************************************************");
console.log("** Ejemplo 13 **");
//  //Esto regresa cualquier letra.
//  // \w es lo mismo que [a-zA-Z]

var arr = texto4.match( /\w/ );
console.log(" Busca cualquier letra ",arr);


console.log("*************************************************");
console.log("** Ejemplo 14 **");
//  //Busca un decimal del 0 al 9.

var arr = texto4.match( /\d/ ); //[0-9]
console.log("Busca un decimal ",arr);

console.log("*************************************************");
console.log("** Ejemplo 15 **");

//  //EN JAVASCRIPT.
//  //En las expresiones regulares tambien tienen tres controladores 
//  //  que nos permiten a nosotros como controlar una expresion 
//  //  regular y se escriben al final de la expresion regular.

// i = insensibles.
// g = quiero tadas las apariciones
// m = multilinea.

var texto5 = "HolA MUndo. 9 a";

//  //Busca la m minuscula.
var arr = texto5.match( /m/ ); //[0-9]
console.log("Busca el caracter m",arr);

console.log("*************************************************");
console.log("** Ejemplo 16 **");

//  //Busca la m sin importar si es minuscula o minuscula.
var arr = texto5.match( /m/i ); //[0-9]
console.log("Busca la m sin importar mayuscula o minuscula ",arr);

console.log("*************************************************");
console.log("** Ejemplo 17 **");

//  //Busco todas las ocurrencias de vocales.
var arr = texto5.match( /[aeiou]/g ); //[0-9]
console.log("Busco todas las ocurrencias de vocales ",arr);

console.log("*************************************************");
console.log("** Ejemplo 18 **");

//  //Busco todas las ocurrencias de vocales sin importar mayusculas o minusculas.
var arr = texto5.match( /[aeiou]/ig ); //[0-9]
console.log("Busco todas las ocurrencias de vocales sin importar mayusculas o minusculas",arr);

console.log("*************************************************");
console.log("** Ejemplo 19 **");

//  //EN JAVASCRIPT.
//  //+ -> Quiero estar seguro que apaezca la "o" por lo menos uno
//  //  o mas veses.

var texto6 = "HolA mundoo. ooo oo";

//  //Quiero estar seguro que apaezca la "o" por lo menos uno
//  //  o mas veses.
var arr = texto6.match( /o+/g ); 
console.log("Quiero estar seguro que apaezca la 'o' por lo menos uno o mas veses",arr);

console.log("*************************************************");
console.log("** Ejemplo 20 **");

//  //EN JAVASCRIPT.
//  //? -> tiene que aparecer la "" o no tiene que aparecer.

//  //Tiene que aparecer la "o" o no tiene que aparecer.
var arr = texto6.match( /o?/g ); 
console.log("Tiene que aparecer la 'o' o no tiene que aparecer.",arr);

console.log("*************************************************");
console.log("** Ejemplo 21 **");

//  //EN JAVASCRIPT.
//  //* -> Uno o mas veses

//  //Tiene que aparecer la "o" o no tiene que aparecer.
var arr = texto6.match( /o*/g ); 
console.log("La 'o' aparece uno o mas veses.",arr);

console.log("*************************************************");
console.log("** Ejemplo 22 **");

//  //EN JAVASCRIPT.
//  //* -> Uno o mas veses

//  //Tiene que aparecer la "o" o no tiene que aparecer.
var arr = texto6.match( /oo*/g ); 
console.log("La 'oo' aparece uno o mas veses.",arr);

console.log("*************************************************");
console.log("** Ejemplo 23 **");

//  //EN JAVASCRIPT.
//  //{ } -> Para definir cuantas veses quiero que aparesca.
//  //Definimos cuantas veses necesito que aparezca la letra "o",
//  //  en este caso quiero que aparezca por lo menos 2 veses.

//  //Tiene que aparecer la "o" o no tiene que aparecer.
var arr = texto6.match( /o{2}/g ); 
console.log("Quiero buscar donde la 'o' aparece al menos 2 veses.",arr);

console.log("*************************************************");
console.log("** Ejemplo 24 **");

var arr = texto6.match( /o{2,}/g ); 
console.log("Digo que tiene que aparecer de 2 coma, y el vacio indica todas las que vengan",arr);

console.log("*************************************************");
console.log("** Ejemplo 25 **");

var arr = texto6.match( /o{2,5}/g ); 
console.log("Digo que tiene que aparecer de 2 coma 5 indica todas las que vengan",arr);

console.log("*************************************************");
console.log("** Ejemplo 25 **");

var arr = texto6.match( /o{3,}/g ); 
console.log("Digo que tiene que aparecer de 3 en adelante todas las que vengan.",arr);

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














