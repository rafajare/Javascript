var origen, destino;


function iniciar(){
	origen=document.getElementById("imagen");
	destino=document.getElementById("soltar");

	origen.addEventListener("dragstart",arrastrado);


	destino.addEventListener("dragenter",function(e){

		e.preventDefault();

	});


	destino.addEventListener("dragover",function(e){
		e.preventDefault();

	});

	destino.addEventListener("drop",soltar);
}



function arrastrado(e){

	var imagen="<img height='250' width='400' src='"+origen.getAttribute("src") +"'>";
	e.dataTransfer.setData('imagen',imagen);

}

function soltar(e){
	e.preventDefault();
	destino.innerHTML=e.dataTransfer.getData("imagen");
}




addEventListener("load",iniciar);


