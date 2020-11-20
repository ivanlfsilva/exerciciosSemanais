

var data = new Date();
var dt = data.toString();
var dia = dt.slice()
var mes = dt.slice(0,3);
var ano = dt.slice(11,15);
document.write(mes + "<br>");
document.write(ano);
document.write(data);