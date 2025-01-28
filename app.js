let listadoAmigos = []; // Array para almacenar los nombres de los amigos

// Agrega un amigo al array y actualiza la lista en pantalla
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value; // Captura y limpia el valor del input

    if (!nombreAmigo) { // Verifica que no esté vacío
        alert('Por favor, inserte un nombre');
    } else {
        if (listadoAmigos.includes(nombreAmigo)) {
            alert('Este nombre ya se encuentra en la lista.');
        }
        else {
            listadoAmigos.push(nombreAmigo); // Agrega el nombre al array
            listarAmigos(); // Muestra la lista actualizada en pantalla
            }
        document.getElementById('amigo').value = ''; // Limpia Elemento al finalizar
    }
}

// Actualiza la lista de amigos en el elemento HTML
function listarAmigos() {
    let elementoLista = document.getElementById('listaAmigos');
    limpiarElemento('resultado') // Limpia resultado si se añaden amigos luego de sorteo o hay una advertencia
    elementoLista.innerHTML = ''; // Limpia el contenido actual
    
    // Genera los elementos <li> para cada amigo
    for (let amigo of listadoAmigos) {
        elementoLista.innerHTML += `<li>${amigo}</li>`;
    }
}

// Genera un índice aleatorio basado en el largo del array
function generarNumero(lista) {
    return Math.floor(Math.random() * lista.length);
}

// Limpia el contenido del resultado
function limpiarElemento(elemento) {
    let resultadoLista = document.getElementById(elemento);
    resultadoLista.innerHTML = '';
}

// Selecciona un amigo al azar y muestra el resultado
function sortearAmigo() {
    let resultadoLista = document.getElementById('resultado');
    
    if (listadoAmigos.length > 1) { // Verifica que haya al menos dos amigos
        let indiceLista = generarNumero(listadoAmigos);
        resultadoLista.innerHTML = `<li>Tu amigo secreto es ${listadoAmigos[indiceLista]}</li>`;
    } else {
        resultadoLista.innerHTML = `<li>No hay suficientes amigos para realizar el sorteo</li>`;
    }
}







