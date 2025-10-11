// modulos em node.js

let msg = Request("./mensagem");
let { areaQuadrado, retangulo, PI} = require("./matematica");

msg.showInfoMessege(areaQuadrado(10));
msg.showErrorMessage(retangulo(5, 6))
console.log(PI);