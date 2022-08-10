const num = Number(prompt('Digite um número aqui que seja divisível por 2 e por 3.')) //seu numero aqui
//Item 1
if(num %2===0){
    if(num %3===0){
        console.log('O número digitado é divisível por 2 ou por 3.')
    }
    else{
        console.log('O número digitado não é válido!')
    }

}
//Item 2
if(num %2===0 && num %3===0){
    console.log('O número digitado é divisível por 2 ou por 3.')}



