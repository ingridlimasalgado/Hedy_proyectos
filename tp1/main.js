/*
Actividad:
-Crear un script que al presionar un boton despliegue en la pantalla la imagen de una cara aleatoria de
un dado de 6 caras.

OPCIONAL:
Renderizar un mensaje que indique el valor de la cara del dado desplegada en el momento.
*/
let dado = document.getElementById('caras');
let btn = document.getElementById('btn');

function tirar() {
    let numero = Math.floor( (Math.random() * 6) + 1);
    
    let html = `<img src="caras/dado${numero}.png" alt="">`;
    console.log(html) 
    dado.innerHTML = html;
}