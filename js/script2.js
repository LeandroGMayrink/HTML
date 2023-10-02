document.write("<h1>Executando script2.js </h1>");
document.write("Esse script esta em um arquivo exetrno ");
document.write("Refereciado no fim do body do HTML");

function mudarCor(novaCor) {
  var x = document.getElementById("demo");
  x.style.color = novaCor;
}