$(document).ready(function(){

	$("#enviar").click(function(){
		if($("#nombre").val()== ""){
			$("#infoUser").html("Nombre vacio").css("color","red");
		}
	});

	//Equivale a placeHolder
	var valorDefecto=$("#nombre").val();
	$("#nombre").focus(function(){
		if($("#nombre").val()==valorDefecto){
			$("#nombre").val("");
		}
	});

	
	$("#enviar").click(function(){
		var unidades=$("#unidades").val()*5.5;
		$("#cantidad").val(unidades);

		$(":checkbox:checked").each(function(){
			console.log($(this).val());
		});

	});

	//En vez de hidden se puede usar tambien DISABLED para deshabilitar
	$("#paypal").click(function(){
		$("#tarjeta").prop("hidden",true);
	});

		$("#visa,#Mastercard").click(function(){
		$("#tarjeta").prop("hidden",false);
	});

});