// FUNCOES DECLARADAS
// HOISTING
function soma(a, b) {
    return a + b;
}

function boasVindas() {
    return "Seja bem-vindo(a)!";
}

// FUNCOES ATRIBUIDAS
// NAO SOFREM HOISTING
// PODEM SER FUNCOES ANONIMAS
const soma2 = (a, b) => {
    return a + b;
};

const boasVindas2 = () => {
    return "Seja bem-vindo(a)!";
};

const funcaoNomeada = function olaMundo() {
    return "Olá, mundo!";
};

console.log(soma(1, 2));
console.log(boasVindas());
console.log(soma2(2, 2));
console.log(boasVindas2());
console.log(funcaoNomeada());

console.log("");
console.log("----");
console.log("");

// CORRETO - HOISTING
meuNome();

function meuNome() {
    console.log("Qual é o seu nome?");
}

// ERRO - HOISTING
olaMundo();

const olaMundo = () => {
    console.log("Olá, meu povo do mundo!");
};
