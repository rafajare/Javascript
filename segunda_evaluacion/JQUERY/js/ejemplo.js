$(document).ready(function(){

	$("input:radio[name=color]").change(function(){
		
			$("#radio").html($("input:radio[name=color]:checked").val()).css("background-color","blue");
		
	});

	$("#texto").focus(function(){

			$("#focus").html("Tienes el foco").css("background-color","blue");

	});

		$("#select").change(function(){
		
			$("#desplegar").html($("option:checked").val()).css("background-color","blue");
		
	});

		$("#boton").click(function(){
			
			$("#color2").prop("checked",true);
			$("#radio").html($("input:radio[name=color]:checked").val()).css("background-color","blue");

	});

});