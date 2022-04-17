//** 50 Funciones de tiempo en Javascript **//
//  //Javascript tiene 2 funciones de tiempo:
//  //  1.- Cuando queremos ejecutar codigo cuando pasa por 
//  //      una cantidad de segundos.
//  //  2.- Otra es cuando queremos que un codigo en particular
//  //      se repita x cantidad de veces por x cantidad de
//  //      segundos.

//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");
console.log("** Nota. Se comento el codigo por fines practicos para no revolver las impresiones de consola. **");

// setTimeout(
//     function(){
//         console.log("Paso un segundo.");
//     },
//     1000
// );

//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 2 **");
console.log("** Nota. Se comento el codigo por fines practicos para no revolver las impresiones de consola. **");

// var segundos = 0;
// var intervalo = setInterval(
//     function(){
//         segundos ++;
//         console.log("Seg: ", segundos);
//         console.log("Intervalo: ", intervalo);
//         console.log(this);
//         if(
//             segundos === 3
//         ){
//             //  //Con esta instruccion paro para que no se cicle.
//             clearInterval(intervalo);
//         }
//     },
//     1000
// );

//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 3 **");
console.log("** Nota. Se comento el codigo por fines practicos para no revolver las impresiones de consola. **");

// var cesar = {
//     nombre: "Cesar",
//     edad : 24,
//     imprimir: function(){
//         setTimeout(
//             function(){
//                 console.log("****");
//                 //  //Nota. Aqui el this apunta al objeto Global.
//                 //  //  Ya que cuando se invoca la funcion imprimir, 
//                 //  //  por dentro invoca a setTimeOut, pero como 
//                 //  //  no lo encuentra en este obejto, 
//                 //  //  pasa a buscarlo al objeto superio, que es este 
//                 //  //  caso es el objeto global.
//                 console.log(this);
//                 console.log(this.nombre, " ", this.edad);
//             }, 
//             1000
//         )
//     }
// }

// cesar.imprimir();

//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 4. Solucion al ejemplo 3 **");
console.log("** Nota. Se comento el codigo por fines practicos para no revolver las impresiones de consola. **");

// var cesar = {
//     nombre: "Cesar",
//     edad : 24,
//     imprimir: function(){
//         var self = this;
//         setTimeout(
//             function(){
//                 console.log("****");
//                 console.log(self);
//                 console.log(self.nombre, " ", self.edad);
//             }, 
//             1000
//         )
//     }
// }

// cesar.imprimir();

//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 5. Errores que pueden suceer y son dificiles de reastrearlos. **");

var nombre = "Abril";
var edad = 1000000000;

var cesar = {
    nombre: "Cesar",
    edad : 24,
    imprimir: function(){
        setTimeout(
            //  //Aqui estamos en el contexto del objeto Global
            //  //  Windows ya que al invocar este metodo, lo busca en los
            //  //  metodos del objeto "cesar" pero como no lo encuentra, 
            //  //  entonces se pasa a buscar al objeto superior, 
            //  //  y en este caso es el objeto window.
            function(){
                console.log("****");
                console.log(this);
                console.log(this.nombre, " ", this.edad);
            }, 
            1000
        )
    }
}

cesar.imprimir();

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================
