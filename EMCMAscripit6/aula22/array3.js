// array / vetores parte 3
//v= valor
//i= indice

var nomes = ["pedro", "maria", "joão", "sabrina", "bruno", "ana"];
var idades = [12, 42, 19, 23, 25, 31, 53, 72];

nomes.forEach(function (v, i) {
    console.log(i, v);
});

idades.forEach(function (v, i){
    console.log(i, v);
});

//every

var nomes = ["pedro", "maria", "joão", "sabrina", "bruno", "ana"];
var idades = [12, 42, 19, 23, 25, 31, 53, 72];

nomes.every(function (v, i, array) {
    console.log(v, i, array);
}); //ele retorna true se todos os elementos desta função se satisfazerem a condição.

//filtros

var nomes = ["pedro", "maria", "joão", "sabrina", "bruno", "ana"];
var idades = [12, 42, 19, 23, 25, 31, 53, 72];

/*
var n = idades.filter(function (v, i, array) {
    console.log(v, i, array);
});*/

var n = idades.filter(function (v, i, array) {
    return v > 30
});
console.log(n);

var n = [];
for (let i = 0; i < idades.length; i++) {
    if(idades[i] > 30){
        n.push(idades[i]);
    }
}
console.log(n);

//reduce

var nomes = ["pedro", "maria", "joão", "sabrina", "bruno", "ana"];
var idades = [12, 42, 19, 23, 25, 31, 53, 72];
var s = [1, 2, 3, 4];

var total = s.reduce(function (a, b, i, array) {
    return a + b;
});
console.log(total);//esquerda pra direita

var s = [1, 1, 1, 4];

var total = s.reduceright(function (a, b, i, array) {
    return a + b;
});
console.log(total);//direita pra esquerda

//some

var nomes = ["pedro", "maria", "joão", "sabrina", "bruno", "ana"];
var idades = [12, 42, 19, 23, 25, 31, 53, 72];

var t = idades.some(function (v, i) {
    return v < 10;
});

console.log(t);