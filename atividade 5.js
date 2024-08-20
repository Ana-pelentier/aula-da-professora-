// 1. Declare um array numeros com os valores fornecidos
let numeros = [10, 20, 30, 40, 50];

// 2. Use o método push para adicionar o valor 60 ao final do array
numeros.push(60);
console.log(numeros);

// 3. Use o método pop para remover o último valor do array
let removido = numeros.pop();
console.log("Valor removido:", removido);
console.log("Array atualizado:", numeros);

// 4. Use o método splice para remover o terceiro elemento do array (número 30)
numeros.splice(2, 1);
console.log("Array atualizado após splice:", numeros);

// 5. Ordene o array em ordem decrescente
numeros.sort((a, b) => b - a);
console.log("Array em ordem decrescente:", numeros);
