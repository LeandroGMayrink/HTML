document.write("<h1>Estamos executando o script.js</h1>");
document.write("Esse script esta sendo chamado no HEAD");
console.log("Primeiro");
console.log("Segundo");

//Comentario de uma linha
//CTRL = ;

/*
Atalho para comentario de vairas linhas
ALT + SHIT + A
*/

//Tipagem fraca
var teste = 1
console.log(typeof (teste));
document.write("<hr>O valor da variavel teste e " + teste + "<hr>");
teste = 'joao'
console.log(typeof (teste));
document.write("<hr>O valor da variavel teste agora e " + teste + "<hr>");
// Variavel global - criada sem necessidade de declaracao
nome = 'joao'
console.log(nome.toUpperCase())

// Formas de declaracao de variaveis
var v1 = 5.25;
let v2 = null;
const v3 = 'teste';

console.log("tipo de variavel v1: " + typeof (v1));
console.log("tipo de variavel v2: " + typeof (v2));
console.log("tipo de variavel v3: " + typeof (v3));
console.log("tipo da NaN " + typeof NaN); //tipo number
console.log("tipo da null " + typeof null); //tipo number
console.log("tipo da variavel +Infinity: " + typeof + Infinity);
const numero = "1";
// Operadores de comparacao
console.log("Testa se numero == 1:" + (numero == 1));
console.log("Testa se numero === 1:" + (numero === 1));

// Adicionar uma lista no body do HTML
var lista = ['arroz', 'feijao', 'carne', 'macarrao'];
var listaUl = document.createElement('ul');

// Acessar elementos atraves do DOM
var body = document.getElementsByTagName('body');

console.log(listaUl);
console.log(body);

document.write('<hr>Vamos criar uma lista agora!<hr>');
body[0].appendChild(listaUl);

for (var i = 0; i < lista.length; i++) {
  var liFor = document.createElement('li');
  var textoLi = document.createTextNode(lista[i]);
  liFor.appendChild(textoLi);
  listaUl.appendChild(liFor);
}

document.write("<hr>A <b>LISTA ACIMA</b> foi criada dinamicamente via JS.");