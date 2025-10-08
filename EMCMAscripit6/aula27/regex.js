// regex -> regular

var r = new RegExp('asdf', 'g');

// outro jeito

var regex = /asdf/gmuiy

//expressão regular tem neste texto

var cePattern = /[0-9]{5}-[0-9]{3}/

var texto = `Meu texto tem cep: 12343-999 e finaliza <b>aqui</b>! novo cep: 98765-321`;

console.log(

    cePattern.test(texto)

);

// segundo metodo

var cePattern = /[0-9]{5}-[0-9]{3}/

var texto = `Meu texto tem cep: 12343-999 e finaliza <b>aqui</b>! novo cep: 98765-321`;

console.log(

    cePattern.exec(texto),
    texto.match(cePattern)// os dois são a mesma coisa, só que um é pra texto o outro pra expressão regular

);

