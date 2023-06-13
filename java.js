function adiciona(){
	var item = document.createElement("li");
	var els = document.getElementsByTagName("ul");
	var novoElement = document.getElementById("campoTarefa").value;
	els[0]
	els[0].appendChild(item)
	item.innerHTML = novoElement
	
	campoTarefa.value = ""
}

function adiciona2(){
	var item = document.createElement("li");
	var els = document.getElementById("listPass2");
	var novoElement = document.getElementById("campoTarefa2").value;
	
	els.appendChild(item)
	item.innerHTML = novoElement
	
	campoTarefa2.value = ""
}

function adiciona3(){
	var item = document.createElement("li");
	var els = document.getElementById("listPass3");
	var novoElement = document.getElementById("campoTarefa3").value;
	
	els.appendChild(item)
	item.innerHTML = novoElement
	
	campoTarefa3.value = ""
}

function adiciona4(){
	var item = document.createElement("li");
	var els = document.getElementById("listPass4");
	var novoElement = document.getElementById("campoTarefa4").value;
	
	els.appendChild(item)
	item.innerHTML = novoElement
	
	campoTarefa4.value = ""
}

function removTarefa(){
    var alertar = confirm ("Deseja excluir a anotação inserida?")
	if (alertar == true) {
		var tirar = document.getElementById("campoTarefa").value;
		var rmvT = document.getElementById("listTarefa");
		var res = rmvT.getElementsByTagName("li");
		rmvT.removeChild(res[tirar - 1])
    }
}

function remov2(){
    var alertar = confirm ("Deseja excluir a anotação inserida?")
	if (alertar == true) {
		var tirar = document.getElementById("campoTarefa2").value;
		var rmvT = document.getElementById("listPass2");
		var res = rmvT.getElementsByTagName("li");
	    	rmvT.removeChild(res[tirar - 1])
    }

}

function remov3(){
    var alertar = confirm ("Deseja excluir a anotação inserida?")
	if (alertar == true) {
		var tirar = document.getElementById("campoTarefa3").value;
		var rmvT = document.getElementById("listPass3");
		var res = rmvT.getElementsByTagName("li");
		rmvT.removeChild(res[tirar - 1])
    }

}

function remov4(){
	var alertar = confirm ("Deseja excluir a anotação inserida?")
	if (alertar == true) {
		var tirar = document.getElementById("campoTarefa4").value;
		var rmvT = document.getElementById("listPass4");
		var res = rmvT.getElementsByTagName("li");
		rmvT.removeChild(res[tirar - 1])
	}

}