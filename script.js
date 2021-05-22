let numero1 = parseInt( prompt('Digite aqui o primeiro número da sua operação!'))

let sinal = prompt('Digite aqui o sinal da sua operação!')

let numero2 = parseInt( prompt ('Digite aqui o segundo número da sua operação'))

let resultado;



if(sinal === '+'){
    alert(`o resultado da sua conta é  ${numero1+numero2}`);
}

if(sinal === '-'){
    alert(`o resultado da sua conta é  ${numero1-numero2}`);
}

if(sinal === '*'){
    alert(`o resultado da sua conta é  ${numero1*numero2}`);
}

if(sinal === '/'){
    alert(`o resultado da sua conta é  ${numero1/numero2}`);
}