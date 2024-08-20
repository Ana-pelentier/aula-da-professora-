// 1. Declare uma função executaOperacao
function executaOperacao(num1, num2, operacao) {
    return operacao(num1, num2);
}

// Funções de operação
function soma(a, b) {
    return a + b;
}

function multiplicacao(a, b) {
    return a * b;
}

// 2. Use a função executaOperacao para somar dois números
console.log(executaOperacao(5, 10, soma));

// 3. Use a função executaOperacao para multiplicar dois números
console.log(executaOperacao(5, 10, multiplicacao));

// 4. Crie uma função repetirOperacao
function repetirOperacao(num, operacao) {
    for (let i = 0; i < num; i++) {
        console.log(operacao());
    }
}

// Exemplo de uso
repetirOperacao(15, () => "Operação repetida!");

// 5. Declare uma função contarOcorrencias
function contarOcorrencias(str, caractere) {
    let contador = 0;
    [...str].forEach(c => {
        if (c === caractere) {
            contador++;
        }
    });
    return contador;
}

// Exemplo de uso
console.log(contarOcorrencias("banana", "a"));
