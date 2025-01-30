// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//lista de amigos
let amigos = [];

// Implementamos una función para agregar amigos
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    // Validamos que el campo no esté vacío
    if(nombreAmigo === ""){
        alert("Por favor, inserte un nombre.");
    // Validamos que el nombre no se encuentre en la lista de amigos
    }else if (amigos.includes(nombreAmigo)){
        alert("El nombre ya se encuentra en la lista de amigos.");
        limpiarCaja();
    // Validamos que el nombre este en la lista de amigos
    }else {
        // Agregamos el nombre a la lista de amigos
        amigos.push(nombreAmigo);
        // Limpiamos el campo de texto
        limpiarCaja();
        // Actualizamos la lista de amigos
        actualizarListaAmigos();
        // Mostramos la lista de amigos
        console.log(amigos);
    }
}

// Implementamos una funcion para limpiar la caja de texto
function limpiarCaja(){
    // Limpiamos el campo de texto
    document.querySelector('#amigo').value = '';
}

// Implementamos una función para actualizar la lista de amigos
function actualizarListaAmigos(){
    // Obtenemos la lista de amigos
    let lista = document.getElementById('listaAmigos');
    // Limpiamos la lista de amigos
    lista.innerHTML = "";
    // Recorremos la lista de amigos
    for (let amigo of amigos){
        // Creamos un elemento li
        let li = document.createElement('li');
        // Agregamos el nombre del amigo al elemento li
        li.textContent = amigo;
        // Agregamos el amigo a la lista
        lista.appendChild(li);
    }
}

// Implementamos una función para sortear los amigos
function sortearAmigo(){
    // Validamos que la lista de amigos no esté vacía
    if(amigos.length === 0){
        alert("No hay amigos en la lista.");
        return;
    }
    // Obtenemos un número aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtenemos el amigo sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    // Mostramos el amigo sorteado
    document.getElementById('resultado').textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
}