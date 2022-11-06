"use strict";
/* 
Dada um texto qualquer e um lista de termos de pesquisa (sequencia de caracteres), retorne os primeiros K termos mais recorrentes na string, onde K é um parâmetro configurável.

Exemplo:

String: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

Lista de termos: ["a", "em", "i", "el"]

K: 2

Resultado: ["i", "a"]

Explicação:

Ocorrências de cada termo,"i": 11, "a": 7, "em": 2, "el": 1, com K = 2, retornamos "i" e "a" ordenados conforme a quantidade de ocorrências de cada termo.

Obs: Quando houver termos com quantidades iguais, priorizar o retorno de acordo com a ordem de ocorrência do termo na string.
*/

function calculaTopOcorrenciasDeQueries(texto, queries, k) {
  const palavrasDoTexto = texto.split(" ");
  let arrTermosEncontrados = [];

  for (let i = 0; i <= queries.length; i++) {
    let queryAtual = queries[i];
    let reg = new RegExp(queryAtual, "g");
    let quantidadeTermo = 0;

    palavrasDoTexto.forEach((el) => {
      quantidadeTermo += (el.match(reg) || []).length;
    });

    if (queryAtual) {
      arrTermosEncontrados = [
        ...arrTermosEncontrados,
        [queryAtual, quantidadeTermo],
      ];
    }
  }

  const termosMaisRecorrentes = pegarTermosMaisRecorrentes(
    arrTermosEncontrados,
    k
  );

  return termosMaisRecorrentes;
}

function pegarTermosMaisRecorrentes(arr, k) {
  let arrOrdemDecrescente = arr
    .sort(function (a, b) {
      return b[1] - a[1];
    })
    .map((el) => el[0]);

  arrOrdemDecrescente.splice(k);
  return arrOrdemDecrescente;
}

console.log(
  calculaTopOcorrenciasDeQueries(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ["a", "em", "i", "el"],
    2
  )
);
