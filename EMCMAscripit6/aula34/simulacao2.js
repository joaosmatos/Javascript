// simulação de encadeamento -> callback rom hell

fazAlgo1(function (primeiroResultado) {
    fazAlgo2(primeiroResultado, function (segundoResultado) {
        fazAlgo3(segundoResultado, function (terceiroResultado) {
            console.log('ufa chegou no fim: ' + terceiroResultado);
        }, erroCallback);
    }, erroCallback);
}, erroCallback);

// melhor escrito no ES6
fazAlgo1()
    .then(function (primeiroResultado) {
        return fazAlgo2(primeiroResultado);
    })
    .then(function (segundoResultado) {
        return fazAlgo3(segundoResultado);
    })
    .then(function (terceiroResultado) {
        console.log('ufa chegou no fim: ' + terceiroResultado);
    })
    .catch(erroCallback);

    // reduzida
    fazAlgo1()
        .then(primeiroResultado => fazAlgo2(primeiroResultado))
        .then(segundoResultado => fazAlgo3(segundoResultado))
        .then(terceiroResultado => {
            console.log('ufa chegou no fim:' + terceiroResultado);
        })
        .catch(erroCallback);