//** 21 Funciones TypeOf e InstanceOf **//
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");
//  //Va a ver momentos en donde nosotos necesitemos estar
//  //  seguros del tipo de datos que estamos recibiendo
//  //  antes de hacer alguna accion.

function identifica( param ){
    console.log(typeof param);
}

identifica(1);
identifica("1");

console.log("*************************************************");
console.log("** Ejemplo 2 **");

function identifica2( param ){
    if(
        typeof param == "function"
    ){
        param();
    }else{
        console.log( param );
    }
}
 function Persona(){

 }

var cesar = new Persona();

identifica2(
    function(){
        console.log("Soy una funcion anonima.");
    }
);

console.log("*************************************************");
console.log("** Ejemplo 3 **");
//  //El instanceOf manda true o false dependiendo de si es el tipo 
//  //  que yo necesite en particular.

//  //El instanceOf nos permite comparar dos objetos.
//  //El typeof se usa si quiero saber de que tipo es la variable.

function identifica3( param ){
    console.log(param instanceof Persona2);
}

function Persona2(){
    this.nombre = "Fernando"; 
    this.edad = 30;
}

var fernando = new Persona2();

identifica3(fernando);
identifica3("fernando");


//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














