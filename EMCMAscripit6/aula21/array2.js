// array / vetores parte 2

var nomes = ["pedro", "maria", "joão", "sabrina", "bruno", "ana"];

console.log(
    nomes.join(), //vc vai juntar todo vetor, vai tranformar em uma string
    nomes.join(","), //se vc não colocar nada ele vai colocar um separador
    nomes.join(" . ")
);

//concat serve para você juntar dois vetores

var nomes = ["pedro", "maria", "joão", "sabrina", "bruno", "ana"];
var idades = [1, 2, 3, 4, 5, 6];

console.log(
    nomes.concat(idades),
    idades.concat(nomes)
);

var nomes = ["pedro", "maria", "joão", "sabrina", "bruno", "ana"];

console.log(
    nomes.indexOf("breno") //se o nome não estiver na lista ele vai retornar -1
);

//slice

var nomes = ["pedro", "maria", "joão", "sabrina", "bruno", "ana"];

console.log(
    nomes.slice(1, 4) //isso é fatia vc só ta pegando parte do vetor
);

//push

var nomes = ["pedro", "maria", "joão", "sabrina", "bruno", "ana"];

console.log(
    nomes
)

nomes.push("filipe");

console.log(
    nomes
)

var nomes = ["pedro", "maria", "joão", "sabrina", "bruno", "ana"];

console.log(
    nomes
)

nomes.unshift("filipe"); // insere no primeiro valor

console.log(
    nomes
)

var nomes = ["pedro", "maria", "joão", "sabrina", "bruno", "ana"];

console.log(
    nomes
)

console.log(nomes.pop());//ele remove no final
console.log(nomes.shift()); //remove no começo
console.log(nomes.splice(2, 2, "filipe"))//entre aspas ele add

console.log(
    nomes
)

//tostring

var nomes = ["pedro", "maria", "joão", "sabrina", "bruno", "ana"];

console.log(
    nomes.toString() //ele vai passar o vetor por string, se possivel  
)