$(document).ready(function(){
	$("#myform").validate({
  
 	rules: {

 		codigo: "required",
 		numeros: "required",
 		fecha: "required",
 		URL: "required",

 		email:{
 			required:true,
 			email:true
 		},

 		tarjeta: {
 			required:true,
 			minlength: 16,
 			maxlength: 16

 		},

 		contraseña: {
 			required:true,
 			minlength:5
 		},

 		repetirContraseña: {
 			required:true,
 			minlength:5,
 			equalTo: "#contraseña"
 		},

 	},

 	messages: {

 		codigo: "Introduce el código",
 		numeros: "Introduce los números",
 		fecha: "Introduce la fecha",
 		URL: "Introduce la URL",
 		email: "Introduce un email",
 		tarjeta: {
 			required: "Introduzca su tarjeta si desea continuar",
 			minlength: "Compruebe los valores de la tarjeta, le faltan números"
 		},

 		contraseña: {
 			required: "Introduzca contraseña",
 			minlength: "La contraseña es muy corta, debe contener mínimo 5 carácteres"
 		},

 		repetirContraseña: {
 			required:"Repita la contraseña",
 			minlength:"La contraseña es muy corta.",
 			equalTo: "La contraseña debe coincidir"
 		},
 	}


 });

});