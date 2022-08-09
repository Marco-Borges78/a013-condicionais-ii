let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();
/* 
if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada") */

switch(nacionalidade){
        case "brasileira":
            console.log('a pessoa é do BRASIL!')
            break;
        case "argentina":
            console.log('a pessoa é da ARGENTINA!')
            break;
        case "uruguaia":
            console.log('a pessoa é do URUGUAI!')
            break;
        case "chilena":
            console.log('a pessoa é do CHILE!')
            break;
        case "colombiana":
            console.log('a pessoa é da COLÔMBIA!')
            break;
        default:
            console.log('nacionalidade NÃO ENCONTRADA')
    }
