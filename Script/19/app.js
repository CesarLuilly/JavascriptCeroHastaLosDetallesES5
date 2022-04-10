//** 19 Prototype **//
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");
//  //Los prototipos permiter expandir este tipo de objetos.

function Persona(){
    this.nombre = "Fernando";
    this.apellido = "Herrera",
    this.edad = 30;

    this.imprimirInfo = function(){
        console.log( this.nombre + " " + this.apellido + "(" + this.edad + ")");
    }   
}

var fer = new Persona();

fer.imprimirInfo();
console.log("fer1", fer);

//  //Los prototipos permiten expandir este tipo de objetos, 
//  //  se le pueden añadir mas propiedades.

Persona.prototype.pais = "Costar rica.";

var fer2 = new Persona();

console.log("fer2", fer2 );

//  //Pero esto de los prototipos no se utiliza solo para agregarle 
//  //  mas propiedades a un objeto creado con el new.

console.log("*************************************************");
console.log("** Ejemplo 2 **");
//  //El objetivo de los prototipos es hacer mas eficiente el uso de 
//  // los objetos. 

//  //Supongamos que crearmos 1000 objetos.
function Persona2(){
    this.nombre = "Fernando";
    this.apellido = "Herrera",
    this.edad = 30;
}

Persona2.prototype.imprimirInfo = function(){
    console.log( this.nombre + " " + this.apellido + "(" + this.edad + ")");
};

var fer3 = new Persona2();
console.log(fer3);
console.log(fer3.imprimirInfo());

//  //Si nosotros hacemos una comparacion con Java, podemos decir
//  //  que los prototipos funcionan como los metodos estaticos
//  //  de Java, la unica diferencia es que los prototipos se 
//  //  se pueden agregar en cualquier punto de la ejecucion
//  //  del programa.

console.log("*************************************************");
console.log("** Ejemplo 3 **");
//  //Nota. Las variables de tipo String tienen sus propios prototipos, 
//  //  asi como tambien las variables de tipo numerica, pero estos no son 
//  //  los mismos.

Number.prototype.esPositivo = function(){
    if(
        this > 0
    ){
        return true;
    }else{
        return false;
    }
}

var a = 1;
console.log("La variable",a, " es positivo? ", a.esPositivo());

a = -15;
console.log("La variable",a, " es positivo? ", a.esPositivo());

//  //COMO RECOMENDACION, NO SE RECOMIENDA AÑADIRLE PROTORIPOS
//  //  A OBJETOS QUE SON DE JAVASCRIPT.
//  //LO QUE SE RECOMIENDA ES AÑADIRLE PROTOTIPOS UNICAMENTE A 
//  //  NUESTRAS CLASES U OBJETOS PERSONALIZADOS.

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














