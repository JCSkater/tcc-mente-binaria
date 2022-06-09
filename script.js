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

function carregarDados() {
    fetch('http://127.0.0.1:5000/todos')
    .then(function(resposta) {
        return resposta.json()
    })
    .then(function(listaProdutos) {
      popularTabela(listaProdutos)
    })
}

function popularTabela(listaProdutos) {
    const tamanhoLista = listaProdutos.length;
    
    for(let index = 0; index < tamanhoLista; index++) {
        const linha = document.createElement('tr');

        const id = document.createElement('td');
        const nome = document.createElement('td');
        const preco = document.createElement('td');

        id.innerHTML = listaProdutos[index][0];
        nome.innerHTML = listaProdutos[index][1];
        preco.innerHTML ="R$" + listaProdutos[index][2];

        linha.appendChild(id);
        linha.appendChild(nome);
        linha.appendChild(preco);
        tabela.appendChild(linha);
    }
}