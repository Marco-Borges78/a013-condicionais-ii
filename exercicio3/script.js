//código a ser reescrito
//Inseri os comandos prompt's
let nome = prompt('Qual o seu nome?')
let idade = prompt('Qual a sua idade?')

if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("Pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}
//Resposta usando if ternário
nome==="José" ? console.log('MR: Oi, Zé!') : console.log('MR: Olá, ' + nome)

idade>=18 ? console.log('MR: Pode tirar carteira de motorista!') : console.log('MR: Ainda não pode tirar carteira de motorista')
