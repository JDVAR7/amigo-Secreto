// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre.trim() === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    
    amigos.push(nombre);
    document.getElementById('listaAmigos').textContent = `${amigos} ${(amigos.length === 1) ? 'amigo agregado' : 'amigos agregados'}`
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debes agregar al menos dos amigos para realizar el sorteo.');
        return;
    }
    
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indice];

    document.getElementById('amigoSecreto').textContent = `¡El amigo secreto es: ${amigoSecreto}!`;    
}