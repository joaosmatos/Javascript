// classes em ES6 -> metodos

class AnimalTerrestre {

    andar() {
        return "deu um passo"
    }

}

let a = new AnimalTerrestre();
console.log(a.andar());

class Calculadora {

    /**
     * 
     * faz somas
     * 
     * @param {number} params
     */
    soma(...params) {
        let s = 0;
        for (let i = 0; i < params.lenght; i++) {
            s += params[i];
        }
        return s;
    }

}

let c = new Calculadora();
console.log(c.soma(1, 2, 3, 4));

// metodos istaticos

class Calculadora {

    /**
     * 
     * faz somas
     * 
     * @param {number} params
     */
    soma(...params) {
        let s = 0;
        for (let i = 0; i < params.lenght; i++) {
            s += params[i];
        }
        return s;
    }

    static getPI() {
        return Math.PI;
    }

}
/*
let c = new Calculadora();
console.log(c.soma(1, 2, 3, 4));*/
console.log(Calculadora.getPI());
