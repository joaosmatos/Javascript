// objetos - json
/* duas formas de criar
var p = new Object();
var pessoa = {};
*/

var pessoa = {};
pessoa.nome = "teste";
pessoa.idade = 12;
pessoa.sexo = "f";

console.log(pessoa);

var pessoa = {
    "nome" : 'teste',
    idade : 12,
    sexo : 'm'
};

//excluir um objeto

var pessoa = {
    "nome": 'teste',
    idade: 12,
    sexo: 'm'
};

delete pessoa.sexo;

console.log(pessoa);

//comparar dois objetos

var pessoa = {
    "nome": 'teste',
    idade: 12,
    sexo: 'm'
};

var p = {
    "nome": 'teste',
    idade: 12,
    sexo: 'm'
};
//a pesar de terem o mesmo conteudo, eles não são iguais
console.log(pessoa == p);
console.log(pessoa === p);

//clonar um objeto

var pessoa = {
    "nome": 'teste',
    idade: 12,
    sexo: 'm'
};

var p = Object.assign({}, pessoa);

//destruturação

var nome = pessoa.nome;
var idade = pessoa.idade;
var sexo = pessoa.sexo;

console.log(nome, idade, sexo);

//outro jeito
var {nome, idade, sexo} = pessoa;

console.log(nome, idade, sexo);