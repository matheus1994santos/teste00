// Retorna operação feita quando chamamos a funçao.
function myFunction(p1, p2) {
  return p1 * p2;
}
// Função return posso colocar operação condição ou loop

document.getElementById("id").innerHTML = myFunction(4, 3); // chama a função

// *********************************************************************************************

var x = myFunction(4, 3); // a função abaixo foi transformada em variavel

document.getElementById("demo").innerHTML = x; // chamado função, operação ou variavel.

function myFunction(a, b) {
  return a * b;
} // função com retorno.

// *********************************************************************************************
//  Variavel
var txt = "";
var person = {fname:"John", lname:"Doe", age:25}; 
var x;

// Condicional Para ou for loop
for (x in person) {
  txt += person[x] + " "; // calculo
}

document.getElementById("demo").innerHTML = txt;

// ********************************************************************************************
// Loop do while.
var text = "";
var i = 0;

do {
  text += "<br>The number is " + i;
  i++;
}
while (i < 10);  

document.getElementById("demo").innerHTML = text;

// *********************************************************************************************

var x = documentElementById("x");

var y = documentElementById("y");

var b = documentElementById("b");

var res = documentElementById("res");

var pi = documentElementById("pi");

resp() = res;

function resp(){
	return x % y;
}

function parImpar(){
	if (resp = 0) {
		documentElementById("pi").innerHTML = " Valor " + resp() + " é par."
	}else{
		documentElementById("pi").innerHTML = " Valor " + resp() + " é impar."
	}
}


// ************************************************

var btn = document.getElementById("btn");

btn.addEventListener('click', function btn(){
	var x = document.querySelector(".x").value;
	var y = document.querySelector(".y").value;

	var resp = parseInt(x) + parseInt(y);

	

})