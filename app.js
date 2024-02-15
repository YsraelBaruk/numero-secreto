let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    //Função com parametro, e sem retorno de informação
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
    responsiveVoice.speak(
        texto, 
        'Brazilian Portuguese Female', 
        {rate:1.2}
    );
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    //Função sem retorno e não tem retorno
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
        // buttonReiniciar.removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else{
        exibirTextoNaTela('p', 'O número secreto é maior'); 
        }
        tentativas++;
        limparCampo()
    }
}

function gerarNumeroAleatorio(){
    //função com retorno, e sem parametro
    
    //Tem uma array, uma lista para gerenciar os sorteios
    //Limpar a lista, Criar novos numeros na lista

    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

/*
Array - Listas
let linguagem ['JavaScript', 'Java', 'Python']
linguagem[1] //Java
linguagem[0] //JavaScript

linguagem[linguagem.length - 1] //Python
*/