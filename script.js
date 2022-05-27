const botao1 = document.querySelector("#botao1");
const botao2 = document.querySelector("#botao2");
const botao3 = document.querySelector("#botao3");

botao1.addEventListener("click", function(){
    document.querySelector("#p1").innerHTML = "Bicicleta Shimano: R$1.500,00";
});

botao2.addEventListener("click", function(){
    document.querySelector("#p2").innerHTML = "Bola de Futebol Wilson: R$200,00";
});

botao3.addEventListener("click", function(){
    document.querySelector("#p3").innerHTML = "Mangá 'Ataque dos Titãs': R$20,00";
});