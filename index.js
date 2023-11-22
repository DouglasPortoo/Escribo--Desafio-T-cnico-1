function sumOfMultiplesThreeOrFive(IntNumber) {

  if (IntNumber < 0) {
    return console.log("o numero precisa ser um inteiro positivo")
  }

  let sum = 0;

  for (let i = 3; i < IntNumber; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

// Exemplo de uso:
const IntNumber = 33; // Você pode alterar o número aqui

const result = sumOfMultiplesThreeOrFive(IntNumber);

console.log(`O somatório dos múltiplos de 3 ou 5 menores que ${IntNumber} é: ${result}`);
