// classes em ES6 -> herança

class Animal {
    constructor(nome) {
        this.nome = this.nome;
    }

    comunicao() {
        console.log(yhis.nome + "faz barulho!");
    }
}

class cachorro extends Animal {
    comunicao(){
        console.log(this.nome + ": auauauauau");
    }
}

class Gato extends Animal {
    comunicao() {
        console.log(this.nome + ": miau");
    }
}

var a = new Animal("serumano");
var c = new cachorro("dogão");
var g = new Gato("tigrão");

console.log(a.comunicao());
console.log(c.comunicao());
console.log(g.comunicao());


class Pessoa {

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    mostraPessoa() {
        return `${this.nome}, ${this.idade}`;
    }

}

class Aluno extends Pessoa {
    constructor(nome, idade, periodoEscolar) {
        super(nome, idade);
        this.periodoEscolar = periodoEscolar;
    }

    mostraPessoa() {
        return super.mostraPessoa() + `${this.periodoEscolar}`;
    }

    mostraDadosAluno() {
        return super.mostraPessoa() + `${this.periodoEscolar}`;
    }
}

var p = new Pessoa("maria", 12);
var a = new Aluno("pedro", 13, 6);

console.log(p.mostraPessoa());
console.log(a.mostraPessoa());
console.log(a.mostraDadosAluno());