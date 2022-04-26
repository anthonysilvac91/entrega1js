/*  MENSAJE DE BIENVENIDA  */

let mensaje = "Bienvenidos a Kiripaper Artículos de Papeleria"


const mensajeBienvenida = (mensaje) => {
    alert(mensaje)
}

mensajeBienvenida(mensaje)

/*  DECLARACION DE VARIABLES  */

let producto 
let valorDespacho = 1500
let agenda = 3000
let sticker = 4000
let washitape = 2000

/*  OPERACION DE COSTOS  */

function agendaDespacho() {
    return agenda + valorDespacho
}
function agendaSinDespacho() {
    return agenda
}
function stickerDespacho() {
    return sticker + valorDespacho
}
function stickerSinDespacho() {
    return sticker
}
function washitapeDespacho() {
    return washitape + valorDespacho
}
function washitapeSinDespacho() {
    return washitape
}

/*  SELECCION DEL USUARIO  */

do{
    producto = prompt("seleccione un producto (agenda, sticker, washitape)")

    if(producto !== "agenda" && producto !== "sticker" && producto !== "washitape"){
        alert("Seleccione un producto correcto")
    }
 
} while(producto != "agenda" && producto != "sticker" && producto != "washitape")

do{
    despacho =prompt("¿Desea Agregar Despacho? (Selecciones si o no)")
    if (despacho != "si" && despacho != "no"){
        alert("Seleccione si o no")
    }
         
} while(despacho !== "si" && despacho !== "no")


/*  RESULTADOS DE LA SELECCION  */


if (producto == "agenda" && despacho == "si"){
    let resultado = agendaDespacho(agenda + valorDespacho)
    alert("El costo de tu compra con despacho es de: " + resultado )
    
}else if (producto == "agenda" && despacho == "no"){
    let resultado = agendaSinDespacho(agenda)
    alert("El costo de tu compra sin despacho es de: " + resultado )
    
}else if (producto == "sticker" && despacho == "si"){
    let resultado = stickerDespacho(sticker + valorDespacho)
    alert("El costo de tu compra con despacho es de: " + resultado )
    
}else if (producto == "sticker" && despacho == "no"){
    let resultado = stickerSinDespacho(sticker)
    alert("El costo de tu compra sin despacho es de: " + resultado )
    
}else if (producto == "washitape" && despacho == "si"){
    let resultado = washitapeDespacho(washitape + valorDespacho)
    alert("El costo de tu compra con despacho es de: " + resultado )
    
}else if (producto == "washitape" && despacho == "no"){
    let resultado = washitapeSinDespacho(washitape)
    alert("El costo de tu compra sin despacho es de: " + resultado )
    
}

/*  MENSAJE DE DESPEDIDA  */

let mensaje2 = "Gracias por comprar en Kiripaper Artículos de Papeleria"


const mensajeDespedida = (mensaje2) => {
    alert(mensaje2)
}

mensajeDespedida(mensaje2)
