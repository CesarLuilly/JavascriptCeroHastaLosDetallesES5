//** 43 Funciones especiales: call(), Apply() y Bind() **//

//  //Toda funcion en javascript tiene 3 medodos que estan en 
//  //  su prototipo llamados call(), Apply() y Bind()

//==========================================================
console.log("** Ejemplo 1 **");
//  //Con el Bind() podemos establecer un objeto.

var carro = {
    color: "Blanco",
    marca: "Mazda",
    imprimir: function(){
        var salida = this.marca + " " + this.color;
        return salida;
    }
};

var carro2 = {
    color: "Rojo",
    marca: "Toyota",
};

console.log(carro.imprimir());
var logCarro = function( arg1, arg2){
    //  //Nota. Este es una funcion del objeto de Window.
    //  //El this apunto en este momento al objeto global
    //  //  y this siempre apunta a un objeto y no a una funcion.

    console.log("INIT ==========================================");
    console.log(this);
    console.log("Argumentos: ", arg1, arg2);
    console.log("Carro: ", this.imprimir());
    console.log("END ==========================================");
};

//  //Con la funcion de bind() yo puedo alterar que valor va a
//  //  a tener this cuando se mande a llamar a la funcion 
//  //  logCarro.

console.log("Uso de bind()");
//  //En este caso digo que el this que esta en logCarro
//  //  quiero que apunte al objeto carro
//  //  y eso es lo que hace la invocacion de metodo bind();
var logModelCarro = logCarro.bind(carro);
logModelCarro("abc", "xyz");

console.log("Uso de call()");
//  //Hay otra manea de hacerlo.
//  //con call() y le pasamos como parametro al objeto al cual
//  //  quiero que se haga referencia el this
//  //  y ademas los parametros que requiere.
logCarro.call(carro, "Nombre123", "Marca456");

console.log("Uso de apply()");
//  //El apply() recibe los parametros dentro de un arreglo, 
//  //  y se utiliza normalmente cuando no sabemos cuantos
//  //  elementos recibe la funcion como parametro.
logCarro.apply(carro, ["Nombre1", "Marca1"]);

//  //FUNCIONES PRESTADAS.
//  //Podemos agarrar funciones de cualquier otro objeto
//  //  que hayamos definido.
console.log("Usando funciones prestadas", carro.imprimir.call(carro2));

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================
