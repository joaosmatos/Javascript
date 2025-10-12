// promises -> promessas

var calc = require("./soma");

console.log("Executa soma.");
calc.soma(5, 6)
    .then(function (res) {
        console.log("soma é: " + res);
    })
    .catch(function (err) {
        console.error(err);
    });
console.log("End");