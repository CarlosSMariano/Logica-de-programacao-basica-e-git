// alert("Boas-vindas ao jogo do número secreto!");

// let nome = "Lua";
// let idade = 25;

// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;

// alert('Erro! Preencha todos os campos');

// let mensagemDeErro = "Erro! Preencha todos os campos";
// alert(mensagemDeErro);

// let nome2 = prompt('Digite seu nome:');

// let idade2 = prompt("Digite sua idade");

// if(idade2 >= 18){
//     alert('Você já pode tirar a habilitação!')
// }



alert('Boas vindas ao jogo do número secreto');

let teto = 10;
let numeroSecreto = parseInt(Math.random()*teto + 1);
console.log(numeroSecreto);

let chute;
let tentativa = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${teto}`);

    if (chute == numeroSecreto) {
        break;
    
      
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`)
        } else {
            alert(`O número secreto é menor que ${chute}`)
        }
        // tentativa = tentativa +1;
        tentativa++
    }
}

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
//concatenação Template Strings
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}, com ${tentativa} ${palavraTentativa}`);

// if(tentativa > 1){
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}, com ${tentativa} tentativas`);
// }else{
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}, com ${tentativa} tentativa`);
// }
