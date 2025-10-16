// classes em ES6

class triangulo {

    constructor(base, altura) {
        this.base = base;
        this.altura = altura
    }

}

let t = new triangulo(2, 5);
console.log(t.altura, t.base);

// expressão de classe

var triangulo = class {

    constructor(base, altura) {
        this.base = base;
        this.altura = altura
    }

}

//let t = new triangulo(2, 5);
console.log(t.altura, t.base);

// nomeada

var triangulo = class triangulo {

    constructor(base, altura) {
        this.base = base;
        this.altura = altura
    }

}

//let t = new triangulo(2, 5);
console.log(t.altura, t.base);