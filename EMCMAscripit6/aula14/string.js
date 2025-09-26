// string - parte 2

var msg = "olá mundo!"


console.log(msg.charAt(0))
console.log(msg[0]);

console.log(msg.charCodeAt(0));
for (let i = 0; i < msg.length; i++) {
    console.log(msg.charCodeAt(i))
}

//concatena concat vai juntar varias variaveis
var msg1 = "olá"
var msg2 = "mundo!"

console.log(msg1 + " " + msg2);
console.log(`${msg1} ${msg2}`);
console.log(msg.concat(" ", msg2));

//replace
var msg = "olá mundo!"

msg.replace()
console.log(msg.replace("o",123));
//ou
console.log(msg.replace(/o/g, 123));
//pode usar como umas string ou como uma expressão regular

//split

var msg ="olá mundo!";
var csv = "id,nome,idade,sexo";
console.log(csv.split());//retorna ele mesmo
console.log(csv.split(""));//ele quebra todo ele em vetor
console.log(csv.split(","));
console.log(csv.split(" "));

//slice

var msg = "olá mundo!"

console.log(
    msg.slice(-5)
)

//substring

var msg = "olá mundo!"

console.log(
    msg.substring(0, 5)
)//funciona da mesma forma que o slice

//touppercase
//vai passar todos os caracteres para maiusculo

var msg = "olá mundo!"

console.log(
    msg.toUpperCase(),
    msg.toLowerCase()
    msg.toLocaleUpperCase()
    msg.toLocaleLowerCase()
)

//value
var msg = "olá mundo!"
//ele devolve o proprio valor da string
console.log(
    msg.valueOf()
)

var msg = "olá mundo!"
//ele pega determinada função e passa pra string
console.log(
    msg.toString()
)

//substr

var msg = "olá mundo!"

console.log(
    msg.substr(2)
)