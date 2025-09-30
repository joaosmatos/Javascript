//array / vetores - patye 1

// vetores
//vetores não tem tamanho definido
var v = [1,2,3,4,5];//vetor
var a = new Array(1,2,3,4,5);
console.log(typeof v, typeof a);

var v = [];
v[0] = 12;
v[4] = 5;
console.log(v);

var v = [];
v.push(12);
v.push(5);
console.log(v);

v[1] = 777;
console.log(v);

var nomes = ["joão", "pedro", "maria"];

/*var x, y, z;
x = nomes[0];
y = nomes[1];
z = nomes[2];*/

var [x, y, z] = nomes;
console.log(x, y, z);

//um vetor não necessariamente pode ser do mesmo tipo
var nomes = [16, "pedro", true, {a: "teste", b:[1, 2, 3, 4] }];

for (const i in nomes) {
    if (nomes.hasOwnPropetry(i)) {
        const element = nomes[i];
        console.log(element);
    }
}