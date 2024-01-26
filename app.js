let numerosSorteados = [];
let num = numeroLimite();
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let msg = document.querySelector('p');
//msg.innerHTML = `Escolha um número entre 1 e ${num}`

// Função para adicionar e validar o número limite
function numeroLimite(num){
    num = prompt(`Olá, seja bem vindo ao jogo do número secreto!\n
Digite um número positivo para que seja o alvo limite do game: `);
    if(num > 0) {
        return num;
    } else {
        alert('Você digitou um número inválido, tente novamente');
        return numeroLimite();
    }
}

// Configurações da interface iniciais
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${num}`);
}
exibirMensagemInicial()

// Função para exibir o texto em tela e adicionar a voz aos textos selecionados
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

// Função para verificar o palpite do usuario
function verificarChute () {
    console.log(numeroSecreto)
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else if (chute > numeroSecreto){
        exibirTextoNaTela('p', 'Não foi dessa vez, o número é menor!')
        limparCampo()
    } else {
        exibirTextoNaTela('p', 'Não foi dessa vez, o número é maior!')
        limparCampo()
    }
    tentativas++;    
}10

// Função para inicializar o numero secreto
function gerarNumeroAleatorio(){
    let auxNum = parseInt(Math.random() * num + 1);
    if(numerosSorteados.length == num){
        numerosSorteados = [];
    }
    
    if(numerosSorteados.includes(auxNum)) {
        return gerarNumeroAleatorio()
    } else {
        numerosSorteados.push(auxNum)
        return auxNum;
    }
    
}

// Função para limpar o campo de chute
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
// Função para reiniciar o game
function restartGame(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial()
    limparCampo()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}