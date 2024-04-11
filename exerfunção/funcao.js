//exer1
//function verificar() {
//    alert("Ola mundo"); 
//}


//exer2
//let nome = prompt ("Digite seu nominho");
//function mensagem(texto) {
//    console.log(`Olá ${texto}`);
//}
//mensagem(nome);

//exr3
//function mensagem(number){
//    number = prompt("Digite um numero");
//    let dobro = number*2;
//    alert(`O dobro de ${number} é ${dobro}`);
//}

//exer4
let n1=prompt("Digite um numero");
let numero2=prompt("Digite um segundo numero");
let n3=prompt("Digite um terceiro numero");
let result;

function calMedia(parN1, parN2, parN3) {
    let media = (parN1+parN2+parN3)/3;
    return media;   
}

result = calMedia(n1,numero2,n3)
alert(`a media desses numeros é ${result}`);