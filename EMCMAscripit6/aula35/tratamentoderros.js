// tratamento de erros
"use strict";
try {
    // executa
    let x = 5;
    let y = 0;
    if (y == 0) {
        throw("Divisão por zero!");
    } else {
        console.log(x / y);
    }
} catch (error) {
    console.log(error);
} finally {
    console.log("fim");
}

// pode utilizar ele assim
try {
    throw ({errorName: "erro nome", message: "erro por usar try catch"});
} catch (e) {
    console.log(e.errorName);
    console.log(e.message);
}


//ou assim
try {
    throw new errorName();
} catch (e) {
    console.log(e.errorName);
    console.log(e.message);
}

function errorName() {
    this.errorName = "texto";
    this.message = "texto não atribuido"
}