// classe em ES5. isso existe mesmo?

var pessoa = function (nome, idade, sexo) {
    // atributo privado
    var tall = altura;
    // atributos publicos
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;

    // setters
    this.setNome = nome => this.nome = nome
    this.setIdade = idade => this.idade = idade
    this.setSexo = sexo => this.sexo = sexo
    this.setAltura = altura => tall = altura
    // getters
    this.getNome = () => this.nome
    this.getIdade = () => this.idade
    this.getSexo = () => this.sexo
    this.getAltura = () => tall

    // metodos publico
    this.mostraPessoa = () => {
        return `${this.nome}, ${this.idade}, ${this.sexo}, ${getCalcAltura}`
    }

    // metodos privados
    function getCalcAltura() {
        return tall * 1.5;
    }


}

var p = new pessoa("maria");
p.setNome("joana");
p.setIdade(17);
p.setSexo("f")
console.log(p.mostraPessoa(), p.getNome());

p.setAltura(2);
console.log(p.mostraPessoa())