// 1. Crie uma data representando o próximo aniversário
let aniversario = new Date('2024-08-29');

// 2. Crie uma data representando a data atual
let hoje = new Date();

// 3. Calcule a diferença em dias entre a data atual e o próximo aniversário
let diffTempo = aniversario - hoje;
let diffDias = Math.ceil(diffTempo / (1000 * 60 * 60 * 24));
console.log("Dias até o próximo aniversário:", diffDias);

// 4. Formate a data atual no formato "YYYY-MM-DD"
let dataFormatada = hoje.toISOString().split('T')[0];
console.log("Data atual formatada:", dataFormatada);

// 5. Adicione 30 dias à data atual
let novaData = new Date(hoje);
novaData.setDate(novaData.getDate() + 30);
console.log("Data atualizada após adicionar 30 dias:", novaData.toISOString().split('T')[0]);
