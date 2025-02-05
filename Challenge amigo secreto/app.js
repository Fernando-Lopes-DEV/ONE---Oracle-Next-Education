//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = []; 

function adicionarAmigo(){
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if(nome === ""){
        alert("Insira um nome por favor");
        return;
    }

    amigos.push(nome);

    atualizarLista();

    input.value="";

}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(function(nome) {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);

    });
}

function sortearAmigo(){
    if (amigos.length ===0) {
        alert("Adicione pelo menos um amigo antes de começar");
        return;
    }

let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)];

let resultado = document.getElementById("resultado");

resultado.innerHTML = "";

let li =document.createElement("li");
li.textContent = "Seu amigo sorteado foi o: "+ amigoSorteado;
resultado.appendChild(li);

let index = amigos.indexOf(amigoSorteado);
if (index > -1) {
    amigos.splice(index, 1);
}

if (amigos.length === 0) {
    alert("Todos já foram sorteados!"); 
    return;
}

}