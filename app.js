// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Implementamos una función para agregar amigos
function agregarAmigo(){
    nombreAmigo = document.getElementById('amigo').value;
    // Validamos que el campo no esté vacío
    if(nombreAmigo = ''){
        alert("Por favor, inserte un nombre.");
    // Validamos que el nombre se encuentre en la lista de amigos
    }else{
        // Agregamos el nombre a la lista de amigos
        amigos.push(nombreAmigo);
        // Limpiamos el campo de texto
        document.getElementById('amigo').value = '';
        // Mostramos la lista de amigos
        console.log(amigos);
    }
}
