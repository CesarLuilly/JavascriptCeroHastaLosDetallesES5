//** 49 Rotulacion de ciclos**//
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");

for_principal:
for (var i = 1; i <= 5; i++){
    console.log("i: " + i);
    for_secundario:
    for(var j = 0; j <= 5; j++){
        console.log("j: " + j);
        for(var k = 0; k <= 5; k++){
            console.log("k: " + k);
            //  //Estoy rompiendo el for principal,
            //  //  y al hacer eso se rompe todo lo que 
            //  //  esta adentro.
            break for_principal;
        }
    }
}


//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================