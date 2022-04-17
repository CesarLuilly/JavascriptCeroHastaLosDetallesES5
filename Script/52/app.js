//** 52 Bloquenado Click Derecho de la pagina **//

//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");

document.onmousedown = function(arg){
    if(
        arg.button === 2
    ){
        //  //Bloqueamos el click derecho.
        alert("Click bloqueado");
        return;
    }
    console.log("NO hay problema");
    console.log(arg);
}

//  //Al solta el click leemos lo que seleccionamos.
document.onmouseup = function(){
    var texto = window.getSelection().toString();
    console.log(texto);
}


//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================
