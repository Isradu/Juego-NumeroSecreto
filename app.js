
let numersoSecreto = 0; // Llama a la función generarNumeroSecreto y guarda el valor en la variable numersoSecreto // Llama a la función generarNumeroSecreto y guarda el valor en la variable min

let intentos = 0; // Declara la variable intentos y le asigna el valor 1

let numeroMaximoIntentos = 3; // Declara la variable numeroMaximoIntentos y le asigna el valor 3

let listaNumerosSorteados = []; // Declara la variable numerosSorteados y le asigna un array vacío (una lista vacía)

let numeroMaximo = 10; // Declara la variable numeroMaximo para el número generado y le asigna el valor 10

function generarNumeroSecreto() { // Función que genera un número aleatorio entre 1 y 10
    numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1; // Genera un número aleatorio entre 1 y 10

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length === numeroMaximo) { // Si la lista de números sorteados tiene la misma cantidad de elementos que el número máximo
        textos('p', 'Se han agotado los números, reinicia el juego'); // Llama a la función asignarElementoTexto y cambia el contenido del elemento p y se detiene la ejecución de la función (termina el juego)
    } else { // De lo contrario:
        if (listaNumerosSorteados.includes(numeroGenerado)) { // si la lista de números sorteados incluye el número generado
            return generarNumeroSecreto(); // Llama a la función generarNumeroSecreto nuevamente hasta que el número no esté en la listaNumerosSorteados
        } else { // De lo contrario:
            listaNumerosSorteados.push(numeroGenerado); // Agrega el número generado a la lista de números sorteados
            return numeroGenerado; // Retorna el número generado
        }
    }    
}

function textos(elemento, texto) { // Función que recibe dos parámetros y cambia el contenido de un elemento HTML
    let elementoHTML = document.querySelector(elemento); // Selecciona el primer elemento HTML que coincida con el parámetro
    elementoHTML.innerHTML = texto; // Cambia el contenido del elemento HTML
    return;
}

function limpiarInput() { // Función que limpia el contenido de un input
   document.querySelector("#valorUsuario").value = "";// Selecciona el input con el id valorUsuario
    return;
}

function condicionesIniciales() { // Función que muestra mensajes iniciales
    textos('h1', 'Juego del número secreto'); // Llama a la función textos y cambia el contenido del elemento h1
    textos('p', `Indica un número del 1 al ${numeroMaximo}`); // Llama a la función textos y cambia el contenido del elemento p
    document.getElementById("reiniciar").setAttribute('disabled', 'disabled'); // Oculta el botón con el id reiniciar
    numersoSecreto = generarNumeroSecreto(); // Llama a la función generarNumeroSecreto y guarda el valor en la variable numersoSecreto
    intentos = 1; // Asigna el valor 1 a la variable intentos
    return;
}

function reiniciarIntnto() { // Función que reinicia el juego al hacer click en el botón HTML bottom
    condicionesIniciales(); // Llama a la función mensajesIniciales
    limpiarInput(); // Llama a la función limpiarInput
    return;
}

function verificarIntento() { // Función que se ejecuta al hacer click en el botón
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); // Obtiene el valor del input y // lo convierte a número
    console.log(numersoSecreto); // Muestra en consola el valor de la variable numersoSecreto
    console.log(intentos); // Muestra en consola el valor de la variable intentos
    if (numeroDeUsuario === numersoSecreto) {
    textos('p', `¡Adivinaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos' }`); // Llama a la función asignarElementoTexto y cambia el contenido del elemento p  
    document.getElementById("reiniciar").removeAttribute('disabled');// Muestra el botón con el id reiniciar

    } else {
        if (numeroDeUsuario > numersoSecreto) {
            textos('p', 'El número secreto es menor, vuelve a intentarlo'); // Llama a la función asignarElementoTexto y cambia el contenido del elemento p
        } else {
            textos('p', 'El número secreto es mayor, vuelve a intentarlo'); // Llama a la función asignarElementoTexto y cambia el contenido del elemento p
        }
        intentos++; // Incrementa la variable intentos en 1
        limpiarInput(); // Llama a la función limpiarInput

        if (intentos > numeroMaximoIntentos) {
            textos('p', `Has superado el número de intentos, el número secreto era ${numersoSecreto}`); // Muestra el mensaje de que se han superado los intentos
            document.getElementById("reiniciar").removeAttribute('disabled'); // Habilita el botón de reinicio
        }
    }
    return; // Retorna la función
}

condicionesIniciales(); // Llama a la función mensajesIniciales