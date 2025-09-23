// funções parte2

var mostraMensagem = function (x) {
    console.log(x);
}
mostraMensagem("olá mundo!")

var showMessage = () => {
    console.log(x);
}
showMessage("olá mundo!, arrow function");

/*
var showMessage = x =>
    console.log(x);
console.log("asd")

var showMessage = (x) => { console.log(x);}
*/

// função encapsulada

var resultSun = ((...params) => {
    var s = 0;
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        s += element;
    }
    return s;
})(10, 6)
console.log(resultSun)