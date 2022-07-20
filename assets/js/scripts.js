//Operadores e tipos
function somaDiferenca () {
    function menorMaior10 (soma)  { return (soma < 10) ? ('menor que 10') : (soma > 10) ? ('maior que 10') : ('não sei') }
    function menorMaior20(soma)  { return (soma < 20) ? ('menor que 20') : (soma > 20) ? ('maior que 20') : ('não sei') }
    function diferente_e_soma (n1, n2) {
         Number(soma = n1 + n2)
         return (n1 !== n2) ? ('Os números são diferentes') : ('Os números são iguais')
        }
       
    console.log(`${diferente_e_soma(10, 2)}. Sua soma é ${soma} que é ${menorMaior10(soma)} e ${menorMaior20(soma)} `)
}
//Metodos string
function palindromo (string) {
    String(palavra = string)
    stringReverse = palavra.split("").reverse().join("")

    return (stringReverse.includes(palavra)) ? console.log('Esta palavra é um palindromo') : console.log('Esta palavra não é um palindromo')
}
// palindromo("tururu")

function numerosPares (num = []) {
  (!num.length) ? console.log (-1) : () =>{
    //  checa se o numero é array

      num.forEach(function(item, i) { (item % 2 == 0) ? num[i] = 0 : false});
    // mostra o array
      console.log(num)
    }
  }
// numerosPares()

// Exercitando arrays
function alunosMedia (alunos = {nome: "Jefferson", notas: [1,2,3,4] }) {
  // console.log(alunos)
 
  let mediaFinal = 10
  
  media = alunos['notas'].reduce(function (p, n ) {return p + n })
  // console.log(media)

   console.log((media >= mediaFinal) ? (`${alunos.nome} sua média é: ${media}, parabéns você foi aprovado!`) : (`Sua média foi insuficiente, estude mais da proxima vez`))
  }
// alunosMedia()

//Exercitando objetos
function calculaIdade(anos = 0) {
  const PESSOA = {
   nome: 'Tais',
   idade: 20,
   signo: 'Gêmeos',
   calcIdade:  function () { return anos + this.idade}};

   console.log(`${PESSOA['nome']}, Você tem ${PESSOA.idade} anos e daqui ${anos} vai ter ${PESSOA.calcIdade()} anos!`)
	}
  // calculaIdade(10)