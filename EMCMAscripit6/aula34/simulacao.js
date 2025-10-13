// exemplo

function sucessoCallback(result) {
    console.log("sucesso: " + result);
}

function erroCallback(error) {
    console.log("falha " + error);
}

fazAlgumacoisa(sucessoCallback, erroCallback);

// pode ser melhor escrita assim
const promise = fazAlgumacoisa();
promise.then(sucessoCallback, erroCallback);

// ou
fazAlgumacoisa().then(sucessoCallback, erroCallback);