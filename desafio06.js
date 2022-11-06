/* 
Dizemos que um número natural X esconde o Y quando, ao apagar alguns algarismos de X, o número Y aparece. Por exemplo, o número 12345 esconde o número 235, uma vez que pode ser obtido ao apagar os números 1 e 4. Por outro lado, ele não esconde o número 154.

A imagem demonstra números: 1,2,3,4,5 todos estão em azul, mas o número 1 e 4 estão com um risco vermelho.

Escreva um código que recebe dois números e que retorna um booleano dizendo se o primeiro esconde o segundo.
*/

function checaNumeroEscondido(numero, numeroOculto) {
  let resposta = true;
  let indexNumeroOculto = [];
  const arrNumeroOculto = String(numeroOculto).split("");

  for (let i = 0; i < arrNumeroOculto.length; i++) {
    indexNumeroOculto.push(String(numero).indexOf(arrNumeroOculto[i]));
  }

  for (let i = 0; i < indexNumeroOculto.length; i++) {
    let proximoNumero = indexNumeroOculto[i + 1]
      ? indexNumeroOculto[i + 1]
      : Infinity;
    if (!(indexNumeroOculto[i] < proximoNumero)) {
      resposta = false;
    }
  }

  return resposta;
}

console.log(checaNumeroEscondido(12345, 235));
