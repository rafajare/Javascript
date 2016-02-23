$(document).ready(function(){


	//Cambiar todos ls elementos clase de un html.
	$("p[class]").css("background-color","yellow");
	//id que sean iguales a parrafoP
	$("p[id='parrafoP']").css("background-color","darkgreen");	
	//Id que empicen por las letras 'par'
	$("p[id^='par']").css("font-weight", "bold").css("font-family","verdana");
	//Parrafos que no sean clase 1.
	$("p[class!=clase1]").css("border-style", "dotted");
	//Parrafo que contengan afo.
	$("p[id*='afo']").animate({opacity:0.25,width:"100px"},4000);
	//concatenar condiciones
	$("p[id^='par'][align=center]").css("text-transform","uppercase");
	//ocultar parrafos
	$("p[id$='1']").hide();
	//mostrar
	$("p[id$='1']").show();
	//todas las cabeceras
	$(":header").css("color","darkred");
	//alerts
	$("p[id=pf1],h2,[align=center]").click(function(){
		alert("clickado");
	});
	//añadimos una clase ya creada
	$(":header > b").addClass("azul");
	//cogemos el segundo elemento del div
	$("div p:nth-child(2)").addClass("azul");

});