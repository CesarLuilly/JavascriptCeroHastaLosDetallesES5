//** Metodos y el objeto this. **//
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");

var persona = {
    nombre: "Maria",
    apellido: "Dubon",
    imprimirNombre: function(){
        console.log("Nombre completo");
    }
}

persona.imprimirNombre();

console.log("*************************************************");
console.log("** Ejemplo 2 **");

var nombre = "Juan carlos";

var persona2 = {
    nombre: "Maria",
    apellido: "Dubon",
    imprimirNombre: function(){
        console.log(nombre);
        console.log(this.nombre + " " + this.apellido);
    }
}

persona2.imprimirNombre();

console.log("*************************************************");
console.log("** Ejemplo 3 **");
console.log("Como recomentacion hay que imprimir lo que contiene this, para saber en que objeto estamos.");

var persona3 = {
    nombre: "Maria",
    apellido: "Dubon",
    imprimirNombre: function(){
        console.log(this.nombre + " " + this.apellido);
    },
    direccion: {
        pais: "Costa rica.",
        obtenerPais: function(){
            console.log(this);

            var nuevaDireccion = function(){
                console.log(this);
            };
            nuevaDireccion();
        }
    }
};

persona3.imprimirNombre();
persona3.direccion.obtenerPais();

console.log("*************************************************");
console.log("** Ejemplo 3 Uso de Self**");
console.log("Como recomentacion hay que imprimir lo que contiene this, para saber en que objeto estamos.");

var persona4 = {
    nombre: "Maria",
    apellido: "Dubon",
    imprimirNombre: function(){
        console.log(this.nombre + " " + this.apellido);
    },
    direccion: {
        pais: "Costa rica.",
        obtenerPais: function(){
            //  //Uso de Self.

            var self = this;

            var nuevaDireccion = function(){
                console.log("Invocacion de Nueva direccion");
                console.log(self);
                console.log(self.pais);

                console.log(this);
            };
            nuevaDireccion();
        }
    }
};

persona4.imprimirNombre();
persona4.direccion.obtenerPais();

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














