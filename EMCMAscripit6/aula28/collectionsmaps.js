// map -> coleção de dados
//ele vai conter uma chave e um valor

var map = new Map();

map.set("nome", "pedro");
map.set("idade", 23);

console.log(map);



map.set("nome", "pedro");
map.set("idade", 23);
map.set("sexo", "m");
console.log(map.has("sexo"));
map.clear();
console.log(map);


map.set("nome", "pedro");
map.set("idade", 23);
map.set("sexo", "m");

map.forEach((v, k, m) => {
    console.log(k, v)
});


map.set("nome", "pedro");
map.set("idade", 23);
map.set("sexo", "m");

for (let it of map.entries()) {
    console.log(it["0"], it["i"]);
}


var map = new Map([
    ["nome", "pedro"]
    ["idade", 23],
    ["sexo", "m"],
]);

map.forEach((v, k) => {
    console.log(k, v)
});