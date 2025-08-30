const prompt = require("prompt-sync")({ sigint: true });

function media (a, b ,c ) {
    return (a + b + c) / 3;
}

let nota1 = parseInt(prompt("Digite sua primeira nota: "));
let nota2 = parseInt(prompt("Digite sua segunda nota: "));
let nota3 = parseInt(prompt("Digite sua terceira nota: "));

let resultado = 0;

resultado = media(nota1, nota2, nota3);
console.log("sua média é : " + resultado);