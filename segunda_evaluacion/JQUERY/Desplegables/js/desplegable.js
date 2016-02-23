$(document).ready(function(){

	$(".respuesta").prop("hidden",true);

	$(".pregunta").click(function(){
		$(this).next("p").slideToggle();
	});

	$('#color').on('change', function() {
 	   $('body').css('background-color', $(this).val()); // cambiar fondo
	});
});