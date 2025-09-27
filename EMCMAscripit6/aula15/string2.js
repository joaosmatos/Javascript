//string - parte 2

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.substring(1, this.lenght).toLowerCase();
};
//manipuloa a string apartir da palavra chave this
var msg = "olá mundo!";

console.log(
    msg.capitalize()
);


