//** Practica: El señor de los anillos. **//
//==========================================================
console.log("*************************************************");
console.log("** Practica **");

//  //Hay que tomar en cuenta que la primera letra del Nombre
//  //  del objeto va en Mayuscula.
function Jugador(nombre){
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;
    //  //Metodo curar del objeto Jugador.
    this.curar = function(jugadorObjetivo){
        if(
            this.sp >= 40
        ){
            this.sp -= 20;
            jugadorObjetivo.pv += 20;
        }else{
            console.info(this.nombre + " no tiene sp ");
        }
        this.estado(jugadorObjetivo);
    },
    //  //Metodo tirar flecha del objeto Jugador.
    this.tirarFlecha = function(jugadorObjetivo){
        if(
            jugadorObjetivo.pv > 40
            
        ){
            jugadorObjetivo.pv -= 40;
        }else{
            jugadorObjetivo.pv = 0;
            console.error(jugadorObjetivo.nombre + "murio ..");
        }
        this.estado(jugadorObjetivo);
    }, 
    //  //Metodo estado del objeto Jugador.
    this.estado = function(jugadorObjetivo){
        console.info(this);
        console.info(jugadorObjetivo);
    }
}

var gandalf = new Jugador("Gandalf");
var Legolas = new Jugador("Legolas");

console.log("** Curar a Gandall **");
gandalf.curar(Legolas);

console.log("** Gandall tira la flecha a Legolas **");
gandalf.tirarFlecha(Legolas);

console.log("** Gandall tira la flecha a Legolas **");
gandalf.tirarFlecha(Legolas);

console.log("** Gandall tira la flecha a Legolas **");
gandalf.tirarFlecha(Legolas);

console.log("** Gandall tira la flecha a Legolas **");
gandalf.tirarFlecha(Legolas);

console.log("** Gandall tira la flecha a Legolas **");
gandalf.tirarFlecha(Legolas);


//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














