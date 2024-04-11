let altura=parseFloat(prompt("Digite o valor da altura da sala"));
let largura=parseFloat(prompt("Digite o valor da largura da sala"));

function areaSala(alt,larg) {
    let area = alt*larg;
    return area;
}
let a=areaSala(altura,largura);

function perimetSala(alt,larg) {
    let perimetro = (alt*2)+(larg*2);
    return perimetro;
}
 let p=perimetSala(altura,largura);

alert(`A area da sala é de ${a.toFixed(2)} e o perímetro de ${p.toFixed(2)}`);