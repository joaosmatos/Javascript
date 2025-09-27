//string  parte 2

//indexof q vc quer saber i index de uma string

var msg = "olá mundo!";

if(msg.indexOf("la"));

console.log(
    msg.indexOf("la"),
    msg.lastIndexOf("o")
   // msg.indexOf("asd");
)

//novos recursos

// search

msg.search()//igul o indexof só que melhorado, você tambem pode usar ele cocmo uma expresão regular
console.log(
    msg.search("á"),
    msg.search(/do/)
)


console.log(
    msg.startsWith("l"),
    msg.endsWith("do!")
//    msg.indexOf("ol") === 0
);

console.log(
    msg.includes("olá, 0")
);