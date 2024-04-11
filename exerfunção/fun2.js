let numero=parseInt(prompt("Digite um número"));
let total=1;

function fator(number) {
    if (number<=1) {
        alert("Não é possível fatorar esse número");
    } else {
        while (number>1) {   
            total *= number; //total = total *number
            number--;
        }
        return total; 
    }
    
}
fator(numero);
alert(`o valor fatorial de ${numero} é ${total}`);
