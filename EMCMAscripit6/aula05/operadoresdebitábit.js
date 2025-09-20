// operadores bit a bit

var a = 2; // bit seria 10
var b = 3; // bit seria 11

console.log(a & b);
console.log(a | b);
console.log(a ^ b);
console.log(~b); // negação ele inverte o bit
console.log(~a);
console.log(a << b); // ele vai deslocar -------------- 10000 base 2 - 16 na base 10
console.log(a >> b); // 010