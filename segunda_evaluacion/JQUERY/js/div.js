	$(document).ready(function(){

		$('div').click(function(){
			$(this).fadeOut("slow");
		});



		//Cambiar imagen al click.
		$('#myimg').click(function(){
			var imagen=$("#myimg").attr('src');
	    		if(imagen=="Goku_Dios.png"){
	    			$('#myimg').prop('src','Goku.png');
	    		}

	    		if(imagen=="Goku.png"){
	    			$('#myimg').prop('src','Goku_Dios.png');
	    		}
    
		});

		//Botones que cambian el tamaño de la imagen
		$('#btn2').prop("hidden",true);
		$('#btn').click(function(){
				$('#myimg').animate({height:"350px"});
				$('#btn').prop("hidden",true);
				$('#btn2').prop("hidden",false);

			});

		$('#btn2').click(function(){
				$('#myimg').animate({height:"250px"});
				$('#btn2').prop("hidden",true);
				$('#btn').prop("hidden",false);
			});


		//filas pares de una tabla
		$("tr:even").css("background-color","orange");
		//filas impares de una tabla
		$("tr:odd").css("background-color","red");


		//Cambiar colores de los parrafos. Jugar con las etiquetas
		$("p:first").css("color","orange");
		$("p:last").css("color","orange");
		$("p:gt(1)").css("color","blue");
		$("p:eq(1)").css("color","yellow");


		$("li:has(a)").addClass("mayusculas");
		$("a:contains('As')").css("font-weight","bold")

	});