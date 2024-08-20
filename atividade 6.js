// 1. Crie um objeto pessoa
let pessoa = {
    nome: "Ana",
    idade: 14,
    profissao: "Desenvolvedor de sistema",
    endereco: {
        rua: "Rua dom joão ll",
        cidade: "Cidade Exemplo",
        estado: "Estado Exemplo"
    },
    apresentacao: function() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
    }
};

// 2. Exiba o valor da propriedade cidade do endereco
console.log(pessoa.endereco.cidade);

// 3. Atualize a propriedade profissao
pessoa.profissao = "Gerente";
console.log(pessoa);

// 4. Adicione uma nova propriedade telefone
pessoa.telefone = "1234-5678";
console.log(pessoa);
