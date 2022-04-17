//** 42 Escape, Unescape y cookies **//
//==========================================================

//  //Que son las Cookies? 
//  //Es información que nosotros podemos salvar en la maquina del 
//  //  cliente, para saber si que idioma selección, para saber el 
//  //  correo electrónico de la persona, para saber el nombre del 
//  //  usuario, cosas generales que no sean sensibles para el 
//  //  funcionamiento de la página, no hay que meter sentencias sql,
//  //  no password, nada que pueda comprometer a nuestro sitio web.

//  //Las cookies pueden sobrevivir reinicios de navegador web, o 
//  //  les podemos poner una fecha de expiración, para que las 
//  //  cookies dejen de existir cuando ya pase esa fecha.

//  //SI AL CARGAR LA PAGINA NO SE VEN REFLEJADOS LOS CAMBIOS, 
//  //  HAY QUE BORRAR LOS DATOS DE NAVEGACION Y DESACTIVAR EL
//  //  BORRADO DE LAS COOKIES. PARA QUE PODAMOS TRABAJAR.

//  //NOTA. HAY QUE TENER EN CUENTA QUE LAS COOKIES ESTAN EN 
//  //  EL SERVIDOR, PERO TAMBIEN PUEDEN SER VISTA DESDE EL 
//  //  CLIENTE.

console.log("*************************************************");
console.log("** Ejemplo 1 **");

//  //Creamos una cookie.
document.cookie = "nombre = Cesar;";

//  //Agregamos otra cookie.
document.cookie = "apellido = Garcia;";

//  //Leyendo una cookie.
var cookies = document.cookie;

console.log(cookies);

console.log("*************************************************");
console.log("** Ejemplo 2 Funcionamiento de Escape y Unescape**");
//  //Ejemplo de lo que hace escape y unescape.
var demo = "123;123//+123 123";
console.log("Ejemplo de lo que hace escape y unescape");
console.log(demo);
console.log("Aplicando escape",escape(demo));
console.log("Aplicando unescape y despues escape",unescape(escape(demo)));

console.log("*************************************************");
console.log("** Ejemplo 3 Crear Funciones para Crear, Boorar y Get Cookies**");

function crearCookie(nombre, valor){
    //  //Nota. Hay que acer algunas modificaciones para evitar 
    //  //  este tipo de problemas.
    //  //document.cookie = "nombre = Cesar;;r;";
    valor = escape(valor);
    var hoy = new Date();
    hoy.setMonth(hoy.getMonth() + 1);
    document.cookie = nombre + "=" + valor + ";expires=" + hoy.toUTCString() + ";";
}

function borrarCookies(nombre){
    //  //La cookie se va a borrar cuando la cookie ya no sea valida.
    var hoy = new Date();
    hoy.setMonth(hoy.getMonth() + 1);
    document.cookie = nombre + "=x;expires=" + hoy.toUTCString() + ";";

}

function getCookies(nombre){
    var cookies = document.cookie;
    var cookieArr = cookies.split("; ");
    console.log(cookieArr);
    for(var i = 0; i < cookieArr.length; i++){
        var parArr = cookieArr[i].split("=");
        cookieArr = parArr;

        if(parArr[0] === nombre){
            return unescape(parArr[i]);
        }
    }

    console.log(cookieArr);
    return undefined;
}

console.log("** Creamos cookies");
crearCookie("nombre", "Cesar");

console.log("** Obtenemos la cookie");
getCookies("nombre");

console.log("** Obtenemos cookie que no existe.");
getCookies("nombre2");

console.log("** Eliminamos la cookie creada anteriomente");
borrarCookies("nombre");

console.log("** Intentamos traer la cookie que borramos");
getCookies("nombre");



//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================

//==========================================================
