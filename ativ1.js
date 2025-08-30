const prompt = require("prompt-sync")({ sigint: true });

function soma (a, b) {
    return a + b;
}

function sub (a, b) {
    return a - b;
}

function div (a, b) {
    if (b === 0) {
        return "erro! o número não poder ser ZERO"
    }
    return a / b;

}

function mult (a , b) {
    return a * b;
}

let num1 = parseFloat(prompt("Escolha o primeiro número: "));
let num2 = parseFloat(prompt("Escolha o segundo número: "));

let escolha = parseInt(prompt("Escolha qual operação matemática deseja: [1]adição / [2]subtração / [3] divisão / [4]multiplicação : "))

let resultado = 0
switch (escolha) {
    case 1:
        resultado = soma(num1, num2);
        break;
    case 2:
        resultado = sub(num1, num2);
        break;
    case 3:
        resultado = div(num1, num2);
        break;
    case 4:
        resultado = mult(num1, num2);
        break; 
    default:
    console.log ("operação inválida!")
}
console.log (resultado)