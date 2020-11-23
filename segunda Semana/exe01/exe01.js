
function executarExercicio() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var c = Number(document.getElementById('c').value);
    //var d = Number(document.getElementById('d').value);
    // implemente a partir daqui
    var r = - a - (b + (c * a * b)) / (c * a); // atribua o resultado dos seus algoritmos a r
    document.getElementById('resultado').innerHTML = "O resultado Da Expressão é : " + r;
    }

    