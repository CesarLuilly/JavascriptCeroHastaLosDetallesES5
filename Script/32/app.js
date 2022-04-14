//** 32 Operaciones de Fecha. **//
//==========================================================
console.log("*************************************************");
console.log("** Ejemplo 1 **");

var fecha =  new Date(2016, 9, 20);

Date.prototype.sumarDias = function(dias){
    this.setDate( this.getDate() + dias);
    return this;
}

Date.prototype.sumarAnios = function(anios){
    this.setFullYear(this.getFullYear() + anios );
    return this;
}


console.log("Fecha fija",fecha);
console.log("Fecha fija y sumar -2 dias",fecha.sumarDias(-2));
console.log("Fecha fija y sumar 1 año",fecha.sumarAnios(1));

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================














