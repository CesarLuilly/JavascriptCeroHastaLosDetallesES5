//** 11 Notacion de puntos y corchetes.  **//
//==========================================================

//  //Notacion de Puntos.

var persona = {
    nombre: "Juana",
    apellido: "Herrera", 
    edad: 25, 
    direccion: {
        pais:"Costa rica",
        ciudad: "San Jose"
    }
};

console.log(persona.direccion.pais);
console.log(persona.direccion);

//  //Le añadiremos una nueva propiedad al objeto de direccion
persona.direccion.zipcode = 11101;
console.log(persona.direccion);

//  //Modificamos el valor de ZipCode.
persona.direccion.zipcode = 16;
console.log(persona.direccion);

//  //Como trabajar con los objetos cuando empiezan a ser casi
//  //  incontrolables???????.

console.log("*************************************************");

var persona2 = {
    nombre: "Juana",
    apellido: "Herrera", 
    edad: 25, 
    direccion: {
        pais:"Costa rica",
        ciudad: "San Jose", 
        edificio: {
            nombre: "Edificio principal",
            telefono: "2222-3333"
        }
    }
};

console.log( persona2.direccion.edificio.telefono );

//  //Una manera de resumir el acceso a los objetos dentro
//  //  de otro objeto, es mediante el uso de pasar objetos
//  //  por referencia.

var edificio = persona2.direccion.edificio;
console.log( edificio );

edificio.nopiso = "8vo piso";
console.log(persona2);

//  //Notacion de corchetes.
console.log("*************************************************");
console.log("** Uso de Notacion corchetes. **");

console.log(persona2["nombre"]);

//  //Imprimir una propiedad dentro de un objeto que esta 
//  //  dentro de otro objeto.

console.log( persona2["direccion"]["pais"]);

console.log("*************************************************");
console.log("** Ejemplo de uso de Notacion corchetes. **");
//  //Hay veses que es necesario decirle a la gente que 
//  //  campos quiero mostrar, por lo tanto la notacion 
//  //  de corchetes es geneia para este tipo de usos.

var campo = "edad";
console.log( persona2[campo]);

//  //Pero que pasa si el campo no esta dentro de las
//  //  propiedades del objeto?? devolvera undefined.
var campo2 = "edad2";
console.log(persona[campo2]);

//  //Lo mismo sucede con la notación punto. Cuando en la 
//  //  notación punto se accede a una propiedad que no
//  //  esta en el objeto, devuelve undifined.

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














