function soma(...params) {
    let s= 0;
    for (let i = 0; i < params.length; i++) {
        s += params[i];
    }
    return s;
}

function subtracao(x, y) {
    return x - y;
}