alert('Boas vindas ao jogo do número secreto!');
let numMax = 100;
let numeroChute;
let numeroSecreto = Math.floor(Math.random() * (numMax - 1) + 1);
//let numeroSecreto = parseInt(Math.random() * 100 + 1);
let qtdChutes = 0;
console.log(numeroSecreto)

checagemDoChute();

// Função para fazer a dinamica do jogo
function checagemDoChute(){
    // Verificação do chute do usuario
    numeroChute = prompt(`Digite um número entre 1 e ${numMax} que voce ache que seja o secreto: `)
    qtdChutes++;
    // Inicio das comparacoes
    // Compara se o chute é igual ao número Secreto
    if(numeroChute == numeroSecreto && qtdChutes == 1){
        alert(`Parabens, você acertou!\nNumero secreto é: ${numeroSecreto}\nVoce precisou apenas de ${qtdChutes} chute para acertar.`);
        return;
    }  else if (numeroChute < numeroSecreto){
        alert("Ainda não acertou, o número secreto é maior!");
        return checagemDoChute();
    } else if (numeroChute > numeroSecreto){
        alert("Ainda não acertou, o número secreto é menor!");
        return checagemDoChute();
    } else {
        alert(`Parabens, você acertou!\nNumero secreto é: ${numeroSecreto}\nVoce precisou apenas de ${qtdChutes} chutes para acertar.`);
        return;
    }
}



/*
alert('Boas vindas ao nosso site!');

let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert('Erro! Preencha todos os campos!');

let mensagemDeErro = "Erro! Preencha todos os campos!";

alert(mensagemDeErro);

nome = prompt('Qual o seu nome?')
idade = prompt('Qual a sua idade?')
if(idade >= 18){
    alert('Parabens! Voce já pode tirar a habilitação')
}


let day = prompt("Qual é o dia da semana?").toLowerCase();

if(day == 'sábado' || day == 'sabado' || day == 'domingo'){
    alert('Bom fim de semana!')
}else {
    alert('Boa semana!')
}

let num = prompt('Digite um número: ')

if(num >= 0){
    alert('Este é um número positivo!')
} else {
    alert('Este é um número negativo!')
}

let score = prompt('Qual foi sua pontuação?')

if(score >= 100){
    alert('Parabens, você ganhou!')
} else {
    alert('Infelizmente voce perdeu, tente novamente!')
}

let saldo = 10000;

alert(`O saldo da sua conta é de R$ ${saldo}`)

let nome = prompt('Digite o seu nome: ')
alert(`Seja bem vindo(a) ${nome}`)

*/

/*
let contador = 1;

while(contador <= 10){
    console.log(contador);
    contador++;
}


while(contador >= 0){
    console.log(contador);
    contador--;
}

let numRegressivo = prompt('Digite um numero positivo para fazermos uma contagem regressiva: ');

while(numRegressivo >= 0){
    console.log(numRegressivo);
    numRegressivo--;
}

let numProgressivo = prompt('Digite um numero positivo para fazermos uma contagem progressiva até ele: ');
let numAux = 0

while(numAux <= numProgressivo){
    console.log(numAux);
    numAux++;
}
*/
/*
let hello = 'Ola';

console.log(hello);

let name = 'Vitor';

console.log(`${hello}, ${name}!`)

alert((`${hello}, ${name}!`))

//let language = prompt('Qual linguagem de programação voce mais gosta?');
//console.log(language)

let valor1 = 10;
let valor2 = 15;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

resultado = (valor1 - valor2) * -1;

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

//let idade = prompt(`Digite sua idade:`)

//idade >= 18 ? console.log('É maior de idade!') : console.log('É menor de idade!');

let num = prompt('Digite um numero seja ele positivo, negativo ou zero');

if(num == 0) {
    console.log('Voce digitou 0!')
} else if (num > 0){
    console.log('Voce digitou um número positivo!')
} else {
    console.log('Voce digitou um número negativo!')
}

num = 1
while(num <= 10){
    console.log(num);
    num++;
}

let nota = Math.floor(Math.random() * (10 - 1) + 1)

nota >= 7 ? console.log('Aprovado!') : console.log('Reprovado!')
console.log(nota)

console.log(Math.random());
console.log(Math.floor(Math.random() * (10 - 1) + 1))
console.log(Math.floor(Math.random() * (1000 - 1) + 1))
*/