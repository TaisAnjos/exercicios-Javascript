// Segundo arquivo js o outro tinha muitas funções

// Exercitando validação de erros
function validacao ( array, numArray) {
   try {
        //checa se os argumentos estão vazios    
        if (!validacao.arguments.length) throw new ReferenceError ('Envie os números!')

        //Checa se o array é um objeto
         else if (typeof array !== 'object') throw  new TypeError (`${array} não é um array!`)

         //Checa se foi enviado um numero
         else if (typeof numArray !== 'number') throw  new TypeError (`${numArray} não é um número!`)

         //Checa se o array tem a mesma quantidade do número
         else if (array.length !== numArray) throw  new RangeError ('O array deve ter a mesma quantidade do número')

         //Caso contrário retorna o array
         else console.log(`Seu array é esse: ${array}`)

   
   } catch  (erro) {
    switch (erro) {
        case erro instanceof ReferenceError:
           return ('Este é um ReferenceError')

        case erro instanceof TypeError:
            return ('Este é um TypeError')

        case erro instanceof RangeError:
            return ('Este é um RangeError')
        
         default:
            return (`Erro inesperado - ${erro}`)
    }
   }
}
//Checando se a validação funciona na ordem: 1- Recebe o array 2- É um array? 3- É um número? 4- Parametros enviados? 5- O array tem a mesma quantidade do número?
// console.log(validacao([123], 1)), console.log(validacao(1)), console.log(validacao([123], 's')), console.log(validacao()), console.log(validacao([123], 2))