// number parte 1

var x = 10; //primeira forma, tipo numerico
var y = new Number("5"); //tipo object

console.log(typeof x, typeof y);

console.log(
    Number.MAX_VALUE,
    Number.MIN_VALUE,
     Number.MIN_SAFE_INTEGER
);

console.log(
    Number.POSITIVE_INFINITY,
    Number.NEGATIVE_INFINITY
)

console.log(
    Number.NaN,
    parent//ele força o numero pra ficar inteiro
)

console.log(
    parseInt(5.1234),//se eu tenho um numero decimal ele vai transformar em inteiro
    (parseFloat("10.652") + 1)//vc pode pegar um numero de tranformar ele em float, pode usar ele tanto pra string quanto pra numero
);

console.log(
    isNaN("asdf"),
    isNaN(5,6)// isnan é um teste pra se é numero ou uma string
);

console.log(
    x.toExponential(10)//ele pega um numero e passa pra um exponencial dele
);

console.log(
    x.toFixed()
);

console.log(
    x.toPrecision()//é a precisão que esse valor vai ter
);

console.log(
    x.toString()//vai pegar um numero e passar ele pra string
)