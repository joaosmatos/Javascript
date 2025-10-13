var fazAlgo1 = function () {
    return new promise(function (resolve, reject) {

        setTimeout(() => {
            resolve(Math.round(Math.random()));
        }, 1000);

    });
}

var fazAlgo2 = function (numero) {
    return new promise(function (resolve, reject) {

        setTimeout(function () {
            resolve(numero * 5);
        }, 2000)

    });
}

var fazAlgo3 = function (numero) {
    return new promise(function (resolve, reject) {

        setTimeout(function () {
            resolve(numero * 2);
        }, 1500);

    });
}

function erroCallback(error) {
    console.log(`Deu ruim mostra a trajedia: ${error}`);
}

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