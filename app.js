let listadoAmigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    
    if (!nombreAmigo){
        alert('Por favor, inserte un nombre');
    }
    else {
        listadoAmigos.push(nombreAmigo);
        listarAmigos();
        document.getElementById('amigo').value = '';
        
    }
}

function listarAmigos() {
    let elementoLista = document.getElementById('listaAmigos');
    elementoLista.innerHTML = '';
    let amigosLista = '';

    for (let amigo of listadoAmigos) {
        amigosLista += `<li>${amigo}</li>`;
    }

    elementoLista.innerHTML = amigosLista;
}

function generarNumero(){
    return Math.floor(Math.random() * listadoAmigos.length);
}


function sortearAmigo(){
    let indiceLista = generarNumero();
    let elementoLista = document.getElementById('resultado');
    

    if(listadoAmigos.length > 1){
        elementoLista.innerHTML = `<li>Tu amigo secreto es ${listadoAmigos[indiceLista]}</li>`
    }
    else{
        alert("Debe haber al menos dos amigos para realizar el sorteo")
    }
}





