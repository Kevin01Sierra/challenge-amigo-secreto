// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
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
        // Mostramos la lista de amigos
        console.log(amigos);
    }
}

// Implementamos una funcion para limpiar la caja de texto
function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}