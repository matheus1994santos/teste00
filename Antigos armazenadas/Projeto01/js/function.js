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