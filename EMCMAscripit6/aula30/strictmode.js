// strict mode
"use strict";

let x = 5;
let y = 6;
let s = x + y;
console.log(s);


var pessoa = {
    nome: "sabrina",
    idade: 12,
    sexo: "f"
}

console.log(pessoa);
delete pessoa.nome;
console.log(pessoa)



var pessoa = {
    nome: "sabrina",
    idade: 12,
    sexo: "f"
}

function maiordeidade(i) {
    "use strict"
    let t = i >= 18;
    return t
}

console.log(pessoa);
delete pessoa.nome;
console.log(maiordeidade(pessoa.idade));