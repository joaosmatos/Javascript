// operadores estrutura condicional

var num = 5

if (num >= 5)
    console.log("oii")

if (num >=5) {
    console.log("oii")
}

var num = 1;

if (num >=5) {
    console.log("num >= 5")
} else if (num >= 2) {
    console.log("num >= 2")
} else {
    console.log("num < 2");
}

var fruta = "laranja";

switch (fruta) {
    case "maça":
        console.log("maça");
        break;
    case "pera":
        console.log("fruta pera");
        break;
    case "abacaxi":
        console.log("fruta abacaxi");
        break;
    default:
        console.log(`fruta desconhecida: ${fruta}`)
        break;                 
}