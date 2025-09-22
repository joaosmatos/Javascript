/*
estrutura de repetição parte 2
for
for ... in
for ... of
*/

var nomes = ["maria", "joão", "pedro"]
for (let i = 0; i < nomes.length; i++) {
    const element = nomes[i];
    console.log(element);
}

//for in
var pessoa = {
    nome: "felipe",
    idade: 12,
    sexo: "m"
};

// i é chave
for (const i in pessoa) {
    if (pessoa.hasOwnPropetry(i)) {
        const element = pessoa[i];
        console.log(element)
    }
}

var endereço = {
    rua:"rua dos bobos",
    bairro: "bobão",
    cep: "000000000000"
};

// i é chave
for (const i in endereço) {
    const element = endereço[i];
    console.log(i, element);
}

//for of

var map = new map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

for (let [key, value] of map) {
    console.log(key, value)
}