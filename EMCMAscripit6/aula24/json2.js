// objetos Json parte 2

var pessoa = {
    "nome": 'teste',
    idade: 12,
    sexo: 'm',
    showpessoa: () => {
        console.log(`$(pessoa.nome), $(pessoa.idade)`);
    },
    soma: (x, y) => {
        console.log(x + y)
    },
    mat: {
        primeiro: "i",
        segundo: "2",
    }

};

pessoa.showpessoa();
console.log(pessoa.soma(4, 7));

// chaves

var pessoa = {
    "nome": 'teste',
    idade: 12,
    sexo: 'm',
    showpessoa: () => {
        console.log(`$(pessoa.nome), $(pessoa.idade)`);
    },
    soma: (x, y) => {
        console.log(x + y)
    },
    mat: {
        primeiro: "i",
        segundo: "2",
    }

};

console.log(Object.keys(pessoa));

// comparar dois objetos

var pessoa = {
    "nome": 'teste',
    idade: 12,
    sexo: 'm',
    showpessoa: () => {
        console.log(`$(pessoa.nome), $(pessoa.idade)`);
    },
    soma: (x, y) => {
        console.log(x + y)
    },
    mat: {
        primeiro: "i",
        segundo: "2",
    }

};

console.log(Object.is(pessoa.sexo, 'm'));

var pessoa = {
    "nome": 'teste',
    idade: 12,
    sexo: 'm',
};

var p = {
    "nome": 'teste',
    idade: 12,
    sexo: 'm',
};

console.log(Object.is(pessoa.sexo, p.sexo));

//excluir

var pessoa = {
    "nome": 'teste',
    idade: 12,
    sexo: 'm',
};

var p = {
    "nome": 'teste',
    idade: 12,
    sexo: 'm',
};

delete p.sexo;

//proteger

var pessoa = {
    "nome": 'teste',
    idade: 12,
    sexo: 'm',
};

var p = Object.freeze(pessoa);
console.log(p);
delete p.sexo;
console.log(p);

//Json

var pessoa = {
    "nome": 'teste',
    idade: 12,
    sexo: 'm',
};
console.log(JSON.stringify(pessoa));

var p = JSON.parse('{"nome":"teste","idade":12,"sexo":"m"}');
console.log(p);//o p vai deixar de ser uma string e vai virar um objeto.