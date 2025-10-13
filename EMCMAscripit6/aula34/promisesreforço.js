// promises -> promessas

var { fazAlgo1, fazAlgo2, fazAlgo3, erroCallback} = require("./promise-exemplo");

console.log("sync")
fazAlgo1()
    .then(function (numero1) {
        console.log("N1: " + numero1)
        return fazAlgo2(numero1);
    })
    .then(function (numero2) {
        console.log("N2: " + numero2)
        return fazAlgo3(numero2);
    })
    .then(function (numero3) {
        console.log("N3: " + numero3)
    })
    .catch(erroCallback);
console.log("sync end")    