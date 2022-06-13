const botao1 = document.querySelector("#botao1");
const botao2 = document.querySelector("#botao2");
const botao3 = document.querySelector("#botao3");

const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");

// Exibe nome e preço
botao1.addEventListener("click", function(){ 
    botao1.style.opacity = "1"
    fetch('http://127.0.0.1:5000/lista/1')
    .then(function(resposta) {
        return resposta.json()
    })
    .then(function(dados) {
        document.querySelector("#p1").innerHTML = `${dados[1]}: R$ ${dados[2]}`
      })
});

botao2.addEventListener("click", function(){ 
    botao2.style.opacity = "1"
    fetch('http://127.0.0.1:5000/lista/2')
    .then(function(resposta) {
        return resposta.json()
    })
    .then(function(dados) {
        document.querySelector("#p2").innerHTML = `${dados[1]}: R$ ${dados[2]}`
      })
});

botao3.addEventListener("click", function(){
    botao3.style.opacity = "1"
    fetch('http://127.0.0.1:5000/lista/3')
    .then(function(resposta) {
        return resposta.json()
    })
    .then(function(dados) {
        document.querySelector("#p3").innerHTML = `${dados[1]}: R$ ${dados[2]}`
      })
});

// Oculta nome e preço
div1.addEventListener("click", function(){ 
    document.querySelector("#p1").innerHTML = ''
});

div2.addEventListener("click", function(){ 
    document.querySelector("#p2").innerHTML = ''
});

div3.addEventListener("click", function(){
    document.querySelector("#p3").innerHTML = ''
});