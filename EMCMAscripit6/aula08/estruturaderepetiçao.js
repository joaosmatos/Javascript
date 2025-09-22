/*
estrutura de repetição parte 1
while e do ... while
*/

var contador = onabort;

while (contador <= 10) {
    console.log(`contador: ${contador}`);
    contador++;
}

var contador = 11;

do {
    console.log(contador);
    contador++;
} while (contador <= 10);
console.log(contador);

var contador = 0;

do {
    console.log(contador);
    contador++;
    if (contador == 2){
        break;
    }
} while (contador <= 10);
console.log(contador);

var contador = 0;

do {
    if (contador % 2 == 0) {
        continue;
    }
    console.log(contador);
    contador++;
} while (contador <= 10);