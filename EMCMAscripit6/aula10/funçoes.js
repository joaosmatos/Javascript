// funções parte 1

function soma1(x, y) {
    console.log(x + y);
}
soma(10, 6);

function soma2(x, y) {
    return x + y;
}
var result = soma(5, 2);
console.log(result);

// funções anonimas
var soma = function (x, y) {
    return x + y;
}

var clickEvent = function (e) {
    //faz algo
}

var button = document.getElementById("btn");
button.onclick = clickEvent;

var btn2 = document.getElementById("btn2");
btn2.onclick = clickEvent;