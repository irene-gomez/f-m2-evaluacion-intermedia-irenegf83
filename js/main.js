'use strict';

// Cojo el input
const inputEl = document.querySelector('#numberTest');
// Cojo el botón
const btnEl = document.querySelector('.btn-test');
// Cojo el texto de feedback al usuario
const userFeedbackEl = document.querySelector('.user-feedback');
// Cojo el contador de intentos
const numberCounterEl = document.querySelector('.number-counter');


function trialCounter() {
    // cada vez que el usuario haga click en el botón se tiene que sumar + 1
    
    // mostrar cada click que hace en el contador de intentos
    
    
    
}

function handleButtonClick(e) {
    e.preventDefault();
    
    // Generar un número aleatorio y muestralo por la  consola 
    const randomNumber = Math.ceil(Math.random() * (1, 100));
    console.log('Número random generado:', randomNumber);
    
    // Acceder al contenido del input y mostrarlo en la consola
    const numberInput = parseInt(inputEl.value);
    console.log('El contenido del input es:', numberInput);
    
    // Comparar el número que el usuario ha escrito en el input con el número aleatorio y pintar el feedback correspondiente en la pantalla
    if(numberInput === randomNumber) {
    // Si el número del usuario y el random son iguales
        // Mostrar texto: "¡HAS GANADO, CAMPEONA!"
        userFeedbackEl.innerHTML = "¡HAS GANADO, CAMPEONA!";
    } else if(numberInput > randomNumber) {
    // en caso contrario, si es mayor
        // Mostrar texto: "demasiado alto"
        userFeedbackEl.innerHTML = "Número demasiado alto";
    } else {
    // sino
        // Mostrar texto: "demasiado bajo"
        userFeedbackEl.innerHTML = "Número demasiado bajo";
    }

    trialCounter();
    
}



// Creo un listener en el botón al hacer click
btnEl.addEventListener('click', handleButtonClick);