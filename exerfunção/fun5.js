let raio=parseFloat(prompt("Digite o valor do raio dessa sala"));
let a;
let p;

function areaSala(katchau) {
    let area = 3.14*katchau^2;
    return area;
}
a=areaSala(raio);

function perimetSala(katchau) {
    let perimetro = 2*3.14*katchau;
    return perimetro;
}
p=perimetSala(raio);

alert(`A area da sala é de ${a.toFixed(2)} e o perímetro de ${p.toFixed(2)}`);