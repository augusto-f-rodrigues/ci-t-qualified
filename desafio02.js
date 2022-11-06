"use strict";
/* 
Você está trabalhando para uma empresa que fornece materiais escolares e precisa da sua ajuda para entrar no mundo digital. Como primeira atividade, você identificou que não existe uma funcionalidade que é muito importante para a empresa ter mais controle sobre os valores dos produtos vendidos. Esta funcionalidade consiste em descobrir o maior e o menor valor dos produtos vendidos em um período de tempo, para cada vendedor.

Os valores das vendas que devem ser consideradas podem variar entre 20 e 500 reais e estão agrupados por vendedores. Além disso, deve-se ignorar as devoluções, que estão indicadas com o valor 0.

A sua função/método deverá receber uma lista vendas agrupadas por vendedores, (e.g. [[200, 100], [300]]) e retornar um array onde a primeira posição contém o menor valor e a segunda posição o maior valor (e.g. [100, 300]).

Mas preste atenção! Algum vendedor pode não ter realizado vendas no período.
*/

function retornaMenorEMaiorValorDeVendas() {
  const argumentos = [].slice.call(arguments, 0);

  if (!argumentos.length == 0) {
    const todasAsVendas = argumentos.flat(Infinity);
    const todasAsVendasFiltradas = todasAsVendas.filter(
      (el) => el >= 20 && el <= 500
    );
    const maiorValor = Math.max(...todasAsVendasFiltradas);
    const menorValor = Math.min(...todasAsVendasFiltradas);
    return [menorValor, maiorValor];
  } else {
    throw new Error("Não foram realizadas nenhuma venda no período");
  }
}

const resultado = retornaMenorEMaiorValorDeVendas(
  [[200, 100], [300], [[30], 700], [30, [500, 800, [1000]]]],
  [100, 0]
);

console.log(resultado);
