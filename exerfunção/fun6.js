let numero = parseInt(prompt('Escolha um número para ter sua tabuada'));
let contador = 1;
let total;

function tabuada(pnumero) {

    while (contador<= 10){
        total = numero*contador;
        console.log (`${pnumero} x ${contador} = ${total}`);
    }
    contador++;  
}
tabuada (numero);