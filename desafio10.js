/* 
Sua equipe está trabalhando em um app de streaming de músicas e uma das funcionalidades é criar um embaralhador de músicas. Uma pesquisa feita pela equipe de UX (experiência do usuário) mostrou que essa é uma das funcionalidades mais importantes para os usuários e por isso foi priorizada a criação de um experimento para testar a melhor solução.

A ideia é criar vários embaralhadores diferentes e realizar um teste com partes dos usuários (chamado de teste A/B), onde cada grupo de usuários selecionado recebe uma versão e através de pesquisas e métricas de utilização saberemos qual terá a maior aceitação.

Sua tarefa será desenvolver um desses embaralhadores. Você deve criar uma função que receberá uma lista de pesos que representa as músicas mais ouvidas pelo usuário. Sua função deve retornar uma lista organizada intercalando as músicas mais ouvidas com as músicas menos ouvidas. Por exemplo:

Na situação onde a lista de pesos é: [2, 10, 5, 3] sua função deverá retornar [10, 2, 5, 3]
*/

function shuffleMusicas(musicasTocadas) {
  let novaPlaylist = [];
  let par = 0;
  let impar = 0;
  if (musicasTocadas.length > 1) {
    const maisOuvidas = musicasTocadas.sort((a, b) => {
      return b - a;
    });

    const menosOuvidas = maisOuvidas
      .splice(Math.ceil(maisOuvidas.length / 2))
      .reverse();

    for (let i = 0; i < musicasTocadas.length * 2; i++) {
      if (i % 2 == 0 && maisOuvidas[par] != undefined) {
        novaPlaylist.push(maisOuvidas[par]);
        par += 1;
      } else if (menosOuvidas[impar] != undefined) {
        novaPlaylist.push(menosOuvidas[impar]);
        impar += 1;
      }
    }
  } else {
    novaPlaylist.push(...musicasTocadas);
  }
  return novaPlaylist;
}

console.log(shuffleMusicas([2, 10, 5, 3]));
console.log(shuffleMusicas([0, 1, 1, 0]));
console.log(shuffleMusicas([1, 2, 3, 4]));
console.log(shuffleMusicas([1, 2, 3, 4, 5]));
console.log(shuffleMusicas([10]));
