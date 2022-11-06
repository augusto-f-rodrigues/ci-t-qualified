/* 
Ao se comparar se uma string é maior que outra, considera-se a ordem alfabética ou lexicográfica. No caso, “abcd” < “adbc” < “bacd”.

Escreva uma função que receba uma string A e retorne uma string B, sendo que B é composta pelos mesmos caracteres que A reordenados.

B deve obedecer às seguintes condições:

Ser maior que A
Ser a menor string possível que cumpra as condições acima
Caso não seja possível encontrar uma string que cumpra as condições, retorne a string “sem reposta”.
Por exemplo:

A = “ab”
Logo, o resultado será “ba”

A = “abcde”
Logo, o resultado será “abced”

A = “ba”
Nesse caso, o resultado será “sem resposta"
*/

function menorStringMaior(name) {
  let comecoNome, finalDoNome, resultado;

  if (name) {
    const arrName = name.split("");

    const arrNameValor = arrName.map((el, i) => {
      let index = arrAlfabeto.indexOf(el);
      return [index, el];
    });

    for (let i = arrName.length - 1; i != 0; i--) {
      let numAtual = arrNameValor[i][0];
      let numAnterior = arrNameValor[i - 1][0];
      if (numAtual > numAnterior) {
        comecoNome = arrName.map((el, index) => {
          if (index == i - 1) {
            return [
              arrAlfabeto[numAtual],
              arrAlfabeto.indexOf(arrAlfabeto[numAtual]),
            ];
          } else if (index == i) {
            return [
              arrAlfabeto[numAnterior],
              arrAlfabeto.indexOf(arrAlfabeto[numAnterior]),
            ];
          } else {
            return [el, arrAlfabeto.indexOf(arrAlfabeto[index])];
          }
        });

        finalDoNome = comecoNome.splice(i);

        comecoNome = comecoNome.map((el) => {
          return el[0];
        });

        finalDoNome = finalDoNome.sort().map((el) => {
          return el[0];
        });

        resultado = comecoNome.join("") + finalDoNome.join("");

        break;
      }
    }
  }

  return resultado || "sem resposta";
}

const arrAlfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

console.log(menorStringMaior("Qualified"));
console.log(menorStringMaior("nextgen"));
console.log(menorStringMaior("ddee"));
console.log(menorStringMaior("ba"));
