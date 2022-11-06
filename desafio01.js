"use strict";
/* 
Você e seu time estão desenvolvendo um sistema de indicações de postos de gasolina que ficam próximos da localização atual do veículo. No modo de direção “viagem”, a funcionalidade a ser desenvolvida é de indicar ao condutor o posto mais distante possível dentro do limite atual de combustível. E caso não exista posto de gasolina, retornar -1

A pessoa responsável por fazer a especificação do sistema informou que você terá as seguintes informações: consumo médio de combustível, quantidade de combustível restante no veículo e um array contendo distâncias dos postos de gasolinas.

Exemplo:
Combustivel (em litros): 2
Consumo médio (km/l): 8
Postos de Gasolina (km): [2, 15, 22, 10.2]
*/

function ultimaParada(combustivel, consumo, postosDeGasolina) {
  const autonomia = combustivel * consumo;
  let postoMaisDistante;

  const postosDisponiveis = postosDeGasolina.filter((postoKm) => {
    if (postoKm <= autonomia) {
      return postoKm;
    }
  });

  if (postosDisponiveis.length != 0) {
    postoMaisDistante = Math.max(...postosDisponiveis);
  }

  return postoMaisDistante || -1;
}

const ultimoPosto = ultimaParada(2, 8, [17, 17, 22, 17.2]);

console.log(ultimoPosto);

/*  const found = postosDeGasolina.filter((postoKm, index, array) => {
  if (postoKm > autonomia) {
    return 
  } else if (postoKm == autonomia) {
    return 
  }
}); */
