// 1. Declare uma variável nulo com o valor null
let nulo = null;

// 2. Verifique se nulo é igual a undefined e se nulo é estritamente igual a undefined
console.log(nulo == undefined);
console.log(nulo === undefined);

// 3. Declare uma variável indefinido sem atribuir valor
let indefinido;

// 4. Verifique se indefinido é NaN
console.log(isNaN(indefinido));

// 5. Declare uma variável numStr2 com o valor "123abc" e tente convertê-la para um número
let numStr2 = "123abc";
let convertido = Number(numStr2);
console.log(isNaN(convertido));
