//** 48 Ciclo For y For in **//
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 Ciclo For**");

for(var i = 0; i<= 10; i++){
    if(
        i === 5
    ){
        break;
    }

    console.log(i);
}

//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 2 Ciclo For In**");
//  //Es cuando tenemos objetos y queremos barrer cada una de 
//  //  las propiedades dentro de los objetos.

//  //Imprimir todas las propiedades que tenga el objeto.
var Persona = function(){
    this.nombre = "Cesar",
    this.apellido = "Garcia",
    this.edad = 24
};

var cesar = new Persona();

console.log("Usando For in");
for(propiedad in cesar){
    //  //Imprimo la propiead y valor de la propiedad.
    console.log("**");
    console.log(propiedad, " : ", cesar[propiedad]);
}

//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 3 Ciclo For In**");
//  //Si añadimos una nueva propiedad al objeto desde un prototype, m
//  //  y en el for in solo queremos imprimir solo las propiedades que 
//  //  estan dentro del objeto original.

//  //Imprimir todas las propiedades que tenga el objeto.

Persona.prototype.direccion = "Colonia Mexico";

var cesar2 = new Persona();

console.log("Usando For in");
for(propiedad in cesar2){
    console.log("**");
    //  //Imprimo la propiead y valor de la propiedad.
    console.log(cesar2.hasOwnProperty( propiedad ));
    console.log(propiedad, " : ", cesar2[propiedad]);
}

//  //A lo que se va a hacer a continuacion se le conoce como
//  //  reflection y es la habilidad que tienen los objetos
//  //  de conocerse a si mismos.
console.log("Usando For in");
for(propiedad in cesar2){
    console.log("**");
    
    if(
        ! cesar2.hasOwnProperty( propiedad ) 
    )
        continue;

    console.log(propiedad, " : ", cesar2[propiedad]);
}

//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 4 Ciclo For In**");
//  //Si quisieramos imprimir los valores de un arreglo.

console.log("Usando For in para imprimir valores de un arreglo.");
for(num in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]){
    //  //Aqui lo que hacemos es imprimir el index.
    console.log(num);
    console.log([num]);
}

//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 4 Ciclo Foreach**");
//  //Si quisieramos imprimir los valores de un arreglo.

console.log("Usando Foreach para imprimir valores de un arreglo.");
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(
    function(val){
        console.log(val);
    }
);

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================
