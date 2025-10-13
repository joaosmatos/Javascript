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