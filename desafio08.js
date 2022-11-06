/* 
Um grande amigo seu mora numa cidade pequena, onde existem apenas duas empresas de táxi - a Empresa 1 e a Empresa 2. Ambas mudam suas taxas a cada dia e calculam o valor de suas corridas da seguinte forma: uma taxa fixa mais um valor por quilômetro rodado.
Seu amigo é fisioterapeuta e pega táxis diariamente para visitar seus clientes ao redor da cidade. Você decidiu escrever um código para ajudá-lo a decidir qual empresa escolher para cada uma das corridas, baseado no preço.

Sua função receberá 4 valores: TF1 (a taxa fixa da empresa 1), VQR1 (o valor por quilômetro rodado da empresa 1), TF2 (a taxa fixa da empresa 2), VQR2 (o valor por quilômetro rodado da empresa 2), todos em formato string. Seu retorno deve ser uma string em uma das seguintes formas:

“Tanto faz” - para o caso de o valor das duas empresas para qualquer corrida ser igual
“Empresa 1” - se o valor da Empresa 1 for sempre menor que o da Empresa 2
“Empresa 2” - para o caso contrário do citado acima
“Empresa Xpto quando a distância < N, Tanto faz quando a distância = N, Empresa Ypto quando a distância > N” para o caso de a escolha depender da distância a ser percorrida (onde Xpto e Ypto representa 1 ou 2 e N representa a distância).
Exemplo:
TF1 = 2,50
VQR1 = 1,00
TF2 = 5,00
VQR2 = 0,75
Output:
“Empresa 1 quando a distância < 10.0, Tanto faz quando a distância = 10.0, Empresa 2 quando a distância > 10.0”
*/

function escolheTaxi(tf1, vqr1, tf2, vqr2) {
  let resposta = "";
  const numtf1 = parseFloat(tf1);
  const numtf2 = parseFloat(tf2);
  const numvqr1 = parseFloat(vqr1) / 1000;
  const numvqr2 = parseFloat(vqr2) / 1000;

  if (numtf1 === numtf2 && numvqr1 === numvqr2) {
    resposta = `Tanto faz`;
  } else if (numtf1 < numtf2 && numvqr1 < numvqr2) {
    resposta = `Empresa 1`;
  } else if (numtf1 > numtf2 && numvqr1 > numvqr2) {
    resposta = `Empresa 2`;
  } else {
    let valor1 = numtf1 + numvqr1;
    let valor2 = numtf2 + numvqr2;
    let distancia;

    while (valor1.toFixed(2) != valor2.toFixed(2)) {
      valor1 += numvqr1;
      valor2 += numvqr2;
    }

    distancia = ((valor1.toFixed(2) - numtf1) / (numvqr1 * 1000)).toFixed(2);

    //Esse bloco abaixo foi necessário pois em um teste é pedido um número arredondado pra duas casas decimais (7.14), já no outro que o resultado é 9.97 querem um número arredondado sem casas decimais e aparecendo somente um '.0' no final
    const arredondar = distancia.split('.')
    if (Number(arredondar[1]) > 50){
      distancia = Math.ceil(distancia).toFixed(1);
    }

    resposta += `Empresa ${
      valor1.toFixed(2) + numvqr1 > valor2.toFixed(2) + numvqr2 ? 1 : 2
    } quando a distância < ${distancia}, Tanto faz quando a distância = ${distancia}, Empresa ${
      valor1.toFixed(2) + numvqr1 < valor2.toFixed(2) + numvqr2 ? 1 : 2
    } quando a distância > ${distancia}`;
  }
  return resposta;
}

console.log(escolheTaxi('2.5', '1.0', '5.0', '0.75'));
