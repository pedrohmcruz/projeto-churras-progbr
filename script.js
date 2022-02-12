let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let quantidadeTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) * criancas);
    let quantidadeTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let quantidadeTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) * criancas);

    resultado.innerHTML = `<p><img src="./images/carne.png" width="30px">${quantidadeTotalCarne/1000}kg de Carne</p>`;
    resultado.innerHTML += `<p><img src="./images/cerveja.png" width="30px">${Math.ceil(quantidadeTotalCerveja / 355)} Latas de cerveja</p>`;
    resultado.innerHTML += `<p><img src="./images/garrafa.png" width="30px">${Math.ceil(quantidadeTotalBebidas / 1000)} Garrafas de bebidas</p>`;

    if (adultos == 0 && criancas == 0 && duracao == 0){
        alert("Você não preencheu nenhum campo. Por favor, nos informe os valores pedidos.")
    }
}

function carnePorPessoa(){
    if (duracao >= 6){
        return 650;
    }

    else{
        return 450;
    };
}

function cervejaPorPessoa(){
    if (duracao >= 6){
        return 2000;
    }

    else{
        return 1200;
    };
}

function bebidasPorPessoa(){
    if (duracao >= 6){
        return 1500;
    }

    else {
        return 1000;
    };
}