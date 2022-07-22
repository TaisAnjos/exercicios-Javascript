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

//Treinando POO

//Conta bancária
class ContaBancaria {
	constructor(agencia, numero, tipo) {
		this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo;
		this._saldo = 0;
	}

	sacar(valor) {
		if (valor > this._saldo) {
			return console.log('Saque negado; saldo insuficiente!');
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}

	depositar(valor) {
		this._saldo = this._saldo + valor;
		return this._saldo;
	}

	set saldo(valor) {
		this._saldo = valor;
	}

	get saldo() {
		return this._saldo;
	}
}

//Conta corrente
class ContaCorrente extends ContaBancaria {
	constructor(agencia, numero, cartaoCredito) {
		super(agencia, numero);
		this.tipo = 'corrente';
		this._cartaoCredito = cartaoCredito;
	}

	set cartaoCredito(valor) {
		this._cartaoCredito = valor;
	}

	get cartaoCredito() {
		return this._cartaoCredito;
	}
}

//Conta poupança
class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'poupança';
	}
}

//Conta Universitária
class ContaUniversitaria extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'universitária';
	}

	sacar(valor) {
		if (valor > 500) {
			return 'Operação negada.';
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}
}
//Fim das classes

// const minhaConta = new ContaCorrente(1, 211, true);
// const contaUni = new ContaUniversitaria(2, 333);