exports.soma = (x, y) => {
    let verificaNumeroNegativos = () => {
        return x < 0 || y < 0;
    }

    var p = new Promise(function (resolve, reject) {
        if (verificaNumeroNegativos()) {
            reject(Error("não permitido numeros negativos!"));
        }
        resolve(x + y);
    });

    return p;
}