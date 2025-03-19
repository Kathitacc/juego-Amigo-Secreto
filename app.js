let amigos = []; 
//para los textos principales de todo mensaje
function asignarText(texto){
    const titulo = document.getElementById('tituloSeccion');
    titulo.textContent = texto; 

}

asignarText("Vamos a hacer una lista de amigos. Incluye aqui a un nuevo amigo");
//agregar nuevo amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    asignarText("Vamos a hacer una lista de amigos. Incluye aqui a un nuevo amigo");
    if (nombre === "") {//que no este vacio
        asignarText("Por favor, ingresa un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombre)) {// que no se repita
        asignarText("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {

    if (amigos.length === 0) {//si esta vacia la lista de amigos o si ya se sortearon todos
        
        asignarText("Agrega al menos un nombre antes de sortear.");
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>Todos los amigos han sido sorteados </strong></li>`;
        
        return;
    }

    

    const indice = Math.floor(Math.random() * amigos.length);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigos[indice]}</strong></li>`;
    amigos.splice(indice, 1);//elimino amigos despues de sorteados
}
