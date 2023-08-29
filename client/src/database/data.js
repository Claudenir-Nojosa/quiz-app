export default [
  {
    id: 1,
    question:
      "Selecione o código que consiga realizar a seguinte ação: Receber dois números pelo teclado, somar os dois, e se o resultado for maior que 10, imprimir o valor resultante",
    options: [
      {
        id: 'q1op1',
        code: `
          const somarNumeros = (a,b) => {
            if((a + b) > 10) {
              console.log(a + b);
            } else {
              console.log('Soma é inferior a 10');
            }
          }
        `,
      },
      {
        id: 'q1op2',
        code: `
          const somarNumeros = (a,b) => {
            if(a + b >= 10) {
              console.log(a + b);
            } else {
              console.log('Soma é inferior a 10');
            }
          }
        `,
      },
      {
        id: 'q1op3',
        code: `
          const somarNumeros = (a,b) => {
            if(a + b = 10) {
              console.log(a + b);
            } else {
              console.log('Soma é inferior a 10');
            }
          }
        `,
      },
    ],
  },
  {
    id: 2,
    question:
      "Selecione o código que consiga realizar a seguinte ação: Fazer um algoritmo que leia três valores inteiros, com isso, determinar e imprimir o menor deles.",
    options: [
      {
        id: 'q2op1',
        code: `
          valor1 = parseInt(valor1);
          valor2 = parseInt(valor2);
          valor3 = parseInt(valor3);
    
          if (valor1 <= valor2 && valor1 <= valor3) {
            console.log(O menor valor é: valor1);
          } else if (valor2 <= valor1 && valor2 <= valor3) {
            console.log(O menor valor é: valor2);
          } else {
            console.log(O menor valor é: valor3);
          }
        `,
      },
      {
        id: 'q2op2',
        code: `
          valor1 = parseInt(valor1);
          valor2 = parseInt(valor2);
          valor3 = parseInt(valor3);
    
          if (valor1 > valor2 && valor1 <= valor3) {
            console.log(O menor valor é: valor1);
          } else if (valor2 >= valor1 || valor2 <= valor3) {
            console.log(O menor valor é: valor2);
          } else {
            console.log(O menor valor é: valor3);
          }
        `,
      },
      {
        id: 'q2op3',
        code: `
          valor1 = parseInt(valor1);
          valor2 = parseInt(valor2);
          valor3 = parseInt(valor3);
    
          if (valor1 > valor2 && valor1 > valor3) {
            console.log(O menor valor é: valor1);
          } else if (valor2 >= valor1 && valor2 <= valor3) {
            console.log(O menor valor é: valor2);
          } else {
            console.log(O menor valor é: valor3);
          }
        `,
      },
    ],
  },
  {
    id: 3,
    question:
      "Selecione o código que consiga realizar a seguinte ação: Criar um algoritmo que leia dois números e imprimir uma mensagem dizendo se são iguais ou diferentes.",
    options: [
      {
        id: 'q3op1',
        code: `
          const numero1 = 10;
          const numero2 = 20;
          
          if (numero1 === numero2) {
            console.log("Os números são iguais.");
          } else {
            console.log("Os números são diferentes.");
          }
        `,
      },
      {
        id: 'q3op2',
        code: `
          const numero1 = 10;
          const numero2 = 20;
          
          if (numero1 = numero2) {
            console.log("Os números são iguais.");
          } else {
            console.log("Os números são diferentes.");
          }
        `,
      },
      {
        id: 'q3op3',
        code: `
          const numero1 = 10;
          const numero2 = 20;
          
          if (numero1 = numero2) {
            console.log("Os números são diferentes.");
          } else {
            console.log("Os números são iguais.");
          }
        `,
      },
    ],
  },
  {
    id: 4,
    question:
      "Selecione o código que consiga realizar a seguinte ação: Ler um número e dizer se ele é múltiplo de três.",
    options: [
      {
        id: 'q4op1',
        code: `
          if (numero % 3 === 0) {
            console.log(É um múltiplo de três.);
          } else {
            console.log(Não é um múltiplo de três.);
          }
        `,
      },
      {
        id: 'q4op2',
        code: `
          if (numero / 3 === 0) {
            console.log(É um múltiplo de três.);
          } else {
            console.log(Não é um múltiplo de três.);
          }
        `,
      },
      {
        id: 'q4op3',
        code: `
          if (numero % 3 === 1) {
            console.log(É um múltiplo de três.);
          } else {
            console.log(Não é um múltiplo de três.);
          }
        `,
      },
    ],
  },
  {
    id: 5,
    question:
      "Selecione o código que consiga realizar a seguinte ação: Faça um algoritmo que receba um número e informe se ele é divisível por 7.",
    options: [
      {
        id: 'q5op1',
        code: `
          if (numero % 7 === 0) {
            console.log(É divisível por 7.);
          } else {
            console.log(Não é divisível por 7.);
          }
        `,
      },
      {
        id: 'q5op2',
        code: `
          if (numero / 7 === 0) {
            console.log(É divisível por 7.);
          } else {
            console.log(Não é divisível por 7.);
          }
        `,
      },
      {
        id: 'q5op3',
        code: `
        if (numero % 7 >= 0) {
          console.log(É divisível por 7.);
        } else {
          console.log(Não é divisível por 7.);
        }
        `,
      },
    ],
  },
  {
    id: 6,
    question:
      "Selecione o código que consiga realizar a seguinte ação: Fazer um algoritmo que leia dois valores numéricos e apresente a diferença do maior para o menor.",
    options: [
      {
        id: 'q6op1',
        code: `
          let maior, menor;

            if (numero1 > numero2) {
              maior = numero1;
              menor = numero2;
            } else {
              maior = numero2;
              menor = numero1;
            }
          
          const diferenca = maior - menor;
        `,
      },
      {
        id: 'q6op2',
        code: `
          let maior, menor;

            if (numero1 < numero2) {
              maior = numero1;
              menor = numero2;
            } else {
              maior = numero2;
              menor = numero1;
            }
          
          const diferenca = maior - menor;
        `,
      },
      {
        id: 'q6op3',
        code: `
          let maior, menor;

            if (numero1 > numero2) {
              maior = numero2;
              menor = numero1;
            } else {
              maior = numero1;
              menor = numero2;
            }
            
          const diferenca = maior - menor;
        `,
      },
    ],
  },
];
