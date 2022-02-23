"use strict";

const numeros = [20, 131, 70, 279, 320];

// //acrescentar 100 a cada elemento

// //solução imperativa

// /*
// const limite = numeros.length
// let numeros100 = []

// for (let index=-0; index < limite;index++) {

//     numeros100[index] = numeros[index] +100

// }

// console.log("numeros:", numeros)
// console.log("numeros mais 100:", numeros100)
// */

// // dolução declarativa

// const adicionar100 = (numero) => numero + 23;

// const numeros100 = numeros.map(adicionar100);

// // map passa
// // 1 Parâmetro : elemento
// // 2 Parâmetro : indice
// // 3 Parâmetro : array

// console.log("numeros:", numeros);
// console.log("numeros mais 100:", numeros100);

// const menorQue100 = (elemento) => {
//   if (elemento < 100) {
//     return elemento + 100.32;
//   } else {
//     return elemento;
//   }
// };

// const numerosMenores100 = numeros.map(menorQue100);

// console.log("numeros:", numeros);
// console.log("numeros mais 100:", numerosMenores100);

// const ehMenor100 = (numero) => numero <= 100;
// const numerosMenores100dois = numeros.filter(ehMenor100);

// console.log("numeros", numerosMenores100dois);

// //////////

// const limite = numeros.length;
// let total = 0;

// // for (let index=-0; index < limite;index++) {

// //     total += numeros[index]

// // }

const somar = (numero, numeroAcumulado) => numero + numeroAcumulado;
// const resultado = numeros.reduce(somar, 0);

// // reduce recebe 4 Parâmetros
// // 1 acumulador
// // 2 elemento
// // 3 indice
// // 4 array

// console.log("total: ", resultado);

///// Valor ao Quadrado /////

const quadrado = (numero) => numero * numero;
const resultadoQuadrado = numeros.map(quadrado);

console.log("total ao quadrado: ", resultadoQuadrado);

///// Valor de pares /////

const pares = (numero) => numero % 2 == 0;

const resltadoPares = numeros.filter(pares);

console.log("total de pares: ", resltadoPares);

///// Valor aa Média /////

const somaMedia = numeros.reduce(somar, 0);

const resultadoMedia = somaMedia /numeros.length;

console.log("total da média: ", resultadoMedia);

///// Valor total dos Impáres /////

const impares = (numero) => numero % 2 != 0;

const resultadoImpares = numeros.filter(impares);

const somaImpares = resultadoImpares.reduce(somar,0)

console.log("total de impares: ", somaImpares);

///// Valor com 20% de desconto /////

const vintePorcentoDesconto = (numero) => numero * 0.8;
const resultadoVintePorcentoDesconto = numeros.map(vintePorcentoDesconto);

const resultadoSomaVintePorcentoDesconto = resultadoVintePorcentoDesconto.reduce(somar,0)

console.log("total com desconto de 20%: ", resultadoSomaVintePorcentoDesconto);

////////////////////////////////////////////////
