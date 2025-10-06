// eventos de tempo

for ( let i = 0; i < 1000; i++) {
    console.log(i);
}

setTimeout(function(){
    console.log("terminou");
}, 2*1000);

setTimeout(function(){
    console.log(timeout);
    clearTimeout(timeout);
}, 250);

// relogio

var interval = setInterval(() => {
    console.log(new Date());
}, 2*1000);

setTimeout(() => clearInterval(interval), 10* 1000);