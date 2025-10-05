// date -> manipulação de datas

var d1 = new Date();
var d2 = new Date(2025, 10, 5);
var d3 = new Date(1950, 2, 5, 12, 45, 5);
var d4 = new Date("0100-01-01t00:00:00.000z")


//console.log(d1.getFullYear(), d1.getUTCFullYear());
//console.log(d2.getDate(), d2.getDay());
//console.log(d3.getMonth(), d3.getHours(), d3.getMinutes(), d3.getSeconds());
//console.log(d4.getTime(), d1.toDateString(), d1.toLocaleDateString());
//console.log(d1.toTimeString(), d1.toLocaleTimeString());

d1.setDate(d1.getDate() + 7);
console.log(d1.toISOString());

d4.setDate(d4.getHours() + 5);
console.log(d4);