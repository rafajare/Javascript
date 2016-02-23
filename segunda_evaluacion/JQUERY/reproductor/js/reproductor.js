var datosCanciones=[
   {
   	titulo: "Tocado y hundido",
   	archivo:"melendi",
   	cantante: "Melendi"
   },

   {
   	titulo:"Dangerous",
   	archivo:"dguetta",
   	cantante: "David Guetta"
   },

   {
   	titulo:"I bet my life",
   	archivo:"imaginedragons",
   	cantante: "Imagine Dragons"
   }
];

var Cancion=function(datos){
	this.titulo=datos.titulo;
	this.archivo=datos.archivo;
	this.cantante=datos.cantante;

	this.vistaMiniatura=function(){
		var e=document.createElement("div");
		e.className="miniatura";
		e.style.backgroundImage="url('imagenes/" + this.archivo + "_peq.jpg')";
		e.draggable=true;
		e.id=this.archivo;

		var cantanteTitulo=this.cantante + ": " + this.titulo;

		e.ondragstart=function(event){
		    event.dataTransfer.setData("text",event.target.id);
            
            event.dataTransfer.setData("titulo",cantanteTitulo);
 		}
 		return e;
	}
}

var l=document.getElementById("lista");
for (var i=0;i<datosCanciones.length;i++){
	var cancion=new Cancion(datosCanciones[i]);
 	l.appendChild(cancion.vistaMiniatura());
}

var p=document.getElementById("caratula");

p.ondragover=function(event){
	event.preventDefault();
}

p.ondrop=function(event){
	event.preventDefault();
	var a =event.dataTransfer.getData("text");
   
	event.target.style.backgroundImage="url('imagenes/" + a + ".jpg')";
	var rep=document.getElementById("controles");
	rep.src="musica/" + a + ".mp3";
	rep.play();

	var titulo=document.getElementById("tituloCancion");
	titulo.innerHTML=event.dataTransfer.getData("titulo");

}
