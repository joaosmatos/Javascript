// set -> coleção de dados

var s = new Set()

s.add("1");
s.add("2");
s.add(true);
console.log(s);
s.delete("2")
console.log(s);
console.log(s.has("2"));
console.log(s.has("2"));
console.log(s.keys(), s.values());


s.add("1");
s.add("2");
s.add(true);

s.forEach((v, k) => console.log(k, v))



s.add("1");
s.add("2");
s.add(true);

for (const it of s.entries()) {
    console.log(it["0"], it["i"]);
}