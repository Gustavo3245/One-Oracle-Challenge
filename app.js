exibirMensagemInicial();

let listaDeNumerosSorteados = [];
let randomNumber = gerarNumeroAleatorio();
let attemps = 0;
let numeroLimite = 10;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.1});
}

function verificarChute(){
    let guess = document.querySelector('input').value;
    attemps++;

    if(guess == randomNumber){
        exibirTextoNaTela('h1', "você descobriu o número secreto!");
        exibirTextoNaTela('h1', "você Acertou! Com apenas " + attemps + " tentativas");
        document.getElementById("reiniciar").removeAttribute('disabled')
    }
    else {
        if(guess > randomNumber){
            exibirTextoNaTela('p', "O número secreto é menor");
        }
        else {
            exibirTextoNaTela('p', "O número secreto é maior");
        }
    }
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeNumerosSorteados = listaDeNumerosSorteados.length;

    if(quantidadeNumerosSorteados == 3){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', "Jogo do numero secreto");
    exibirTextoNaTela('p', "Escolha um numero entre 1 e 10");
}

function reiniciarJogo(){
    randomNumber = gerarNumeroAleatorio();
    attemps = 0;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}