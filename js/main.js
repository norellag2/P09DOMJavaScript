// DOM Document Object Model

// SELECCIÓN DE ELEMENTOS DEL DOM

// Coleccion de métodos selectores

//Selector de un elemento por su id
let títuloPrincipal = document.getElementById('título-principal');
console.log (títuloPrincipal);

//Selector de varios elementos por su etiqueta (poco utilizado)
let buttons = document.getElementsByTagName('button');
console.log(buttons); //como son varios elementos retorna en Array

//Selector de varios elementos por su clase CSS (poco utilizado)
let parrafosInstrucciones = document.getElementsByClassName('instrucciones')
console.log(parrafosInstrucciones);

//Selector de un elemento solo mediante consulta (muy utilizado)
//en esa consulta se le pasa los mismos selectores que en CSS
let linkDinamico = document.querySelector('a.link-dinamico');
console.log (linkDinamico);

//Selector de vario elementos mediante consulta (muy utilizado)
//idem anterior pero en Array
let jumboItems = document.querySelectorAll('.jumbo li');
console.log (jumboItems);


//Modificación de elementos del DOM
//COLECCIÓN DE MÉTODOS Y PROPIEDADES DE MODIFICACIÓN DE ELEMENTOS

títuloPrincipal.innerHTML = 'Otro título';

buttons[1].disabled = true;

parrafosInstrucciones[0].style.color = 'crimson';

let options = ['Apple', 'Xiaomi', 'Samsung'];
for(i=0; i<jumboItems.length; i++) {
    jumboItems[i].innerHTML = options[i];
}

//CREAR, SUSTITUIR Y ELIMINAR ELEMENTOS DEL DOM

//Crear un elemento y añadirlo

let nuevoItem = document.createElement('li');  //crear el elemento en JS
nuevoItem.innerHTML = 'Nokia';  //Añadimos contenido

let jumboList = document.querySelector( '.jumbo');  //selecciono al padre
jumboList.appendChild(nuevoItem);

//para eleiminar usar removeChild ()
//para sustituir usar replaceChild()

//EVENTOS DEL DOM
//primer tipo de implementacion de eventos

let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');

function toggleModal() {
if (modal.style.display === 'none') {
    overlay.style.display = 'block';
    modal.style.display = 'block';
} else {
    overlay.style.display = 'none';
    modal.style.display = 'none';
   }
}

//2º tipo de implementación de eventos
//mediante escuchadores

let inputNombre = document.querySelector('.nombre');
let parrafoValidacion = document.querySelector('.validacion');
parrafoValidacion.style.display = 'none';

inputNombre.addEventListener('input', () => {
    if (inputNombre.value.length >= 4) {
        buttons[1].disabled = false;
        parrafoValidacion.style.display = 'none';
       
    } else {
        buttons[1].disabled = true;
        parrafoValidacion.style.display = 'inline';
    }
    
})

