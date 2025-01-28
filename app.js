let listadoAmigos = []; // Array para almacenar los nombres de los amigos

// Agrega un amigo al array y actualiza la lista en pantalla
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim(); // Captura y limpia el valor del input

    if (!nombreAmigo) { // Verifica que no esté vacío
        alert('Por favor, inserte un nombre');
    } else {
        listadoAmigos.push(nombreAmigo); // Agrega el nombre al array
        listarAmigos(); // Muestra la lista actualizada en pantalla
        document.getElementById('amigo').value = ''; // Limpia el input
    }
}

// Actualiza la lista de amigos en el elemento HTML
function listarAmigos() {
    let elementoLista = document.getElementById('listaAmigos');
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

// Selecciona un amigo al azar y muestra el resultado
function sortearAmigo() {
    let elementoLista = document.getElementById('resultado');

    if (listadoAmigos.length > 1) { // Verifica que haya al menos dos amigos
        let indiceLista = generarNumero(listadoAmigos);
        elementoLista.innerHTML = `<li>Tu amigo secreto es ${listadoAmigos[indiceLista]}</li>`;
    } else {
        alert("Debe haber al menos dos amigos para realizar el sorteo");
    }
}







