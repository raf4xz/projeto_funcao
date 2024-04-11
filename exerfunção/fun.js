let altura=parseFloat(prompt("Digite sua altura(em metros)"));
let peso=parseFloat(prompt("Digite seu peso(em kg)"));
let total;

function calIMC(metro,kg) {
    let IMC = kg/(metro*metro);
    return IMC;
}

total=calIMC(altura,peso);
alert(`Seu IMC é ${total.toFixed(2)}`);