/* 
    Escribe dos funciones, tu elije el nombre para cada una.
    1. La primera función se encarga de generar un número aleatorio al darle clic al botón de "Generar número"
    2. La segunda función se encarga de comparar el número ingresado por el usuario contra el número aleatorio
    generado en la primera función. Si el usuario ingresa un número mas pequeño que el actual deberás de imprimir en pantalla
    "Intenta con un número más grande", si el usuario ingresa un número más grande que el actual deberás de imprimir
    en pantalla "Intenta con un número más pequeño". Hacer esto hasta que el usuario adivine el número y desplegar
    "Has adivinado el número".
*/


let numeroGenerado = 0;
let elementResultado = document.querySelector(".resultado")

function generaNumeroAleatorio(event) {
    event.preventDefault()
    numeroGenerado = Math.floor(Math.random() * (99) + 1);
    numeroSeleccionado = 0;
}

function adivinaNumero(event) {
    event.preventDefault()    
    let numeroSeleccionado = parseInt(document.querySelector("#adivinaNumero").value)
    if (numeroSeleccionado>numeroGenerado) {
        elementResultado.innerHTML += `<p>${numeroSeleccionado} es mayor</p>`   
    }else if(numeroSeleccionado<numeroGenerado){
        elementResultado.innerHTML += `<p>${numeroSeleccionado} es menor</p>` 
    }else if (numeroSeleccionado===numeroGenerado) {
        elementResultado.innerHTML += `<p>Adivinaste el numero</p>`  
    }
}
let formElement = document.querySelector(".formularioAdivina")
formElement.addEventListener("submit",adivinaNumero)
// let evento = document.addEventListener("click",(e)=>{

// })