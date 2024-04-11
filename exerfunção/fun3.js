let valor=parseFloat(prompt("Digite um valor em reais"));
let total;

function convert(dolar) {
    total=dolar*4.80;
    return total;
}
convert(valor);
alert(`O valor de US$${valor.toFixed(2)} convertido em reais é R$${total.toFixed(2)} `);
