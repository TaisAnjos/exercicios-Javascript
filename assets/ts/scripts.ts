// Desafio 1

let employee = {
    code: 10,
    nome: "Jhon"
};

//Desafio 2

interface Ipessoa {
    nome: string;
    idade: number
    profissao: string;
}
let pessoa1: Ipessoa = {
    nome: "Maria",
    idade: 29,
    profissao: "Atriz"
};

let pessoa2: Ipessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: "Padeiro"
    
}

let pessoa3: Ipessoa = {
    nome: "Laura",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4: Ipessoa = {
    nome: "carlos",
    idade: 19,
    profissao: "Padeiro"
}

// Desafio 3

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement ;

Number(campoSaldo.innerHTML)

function somarAoSaldo(soma: number) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
     const soma1: number = Number(soma.value)
    somarAoSaldo(soma1);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});