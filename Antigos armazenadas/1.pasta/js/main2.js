var btn = document.getElementById("btn");

btn.addEventListener('click', function(){
	var a = document.querySelector("#x").value;
	var b = document.querySelector("#y").value;

	var res = parseInt(a) + parseInt(b);

	document.getElementById("a").innerHTML = res;
})