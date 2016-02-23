 var arrayProductos;
 var arrayCarrito=[];


 function inicio(){
     producto();
 } 

 function Producto(idProducto, nombreProducto){
     this.idProducto= idProducto;
     this.nombreProducto = nombreProducto;
 }

 function producto(){
     var libroJavascript = new Producto("0", "Introduccion a Javascript");
     var libroPHP = new Producto("1","Introduccion al lenguaje PHP");
     var libroQuery = new Producto("2","Introduccion a jQuery");
     var libroAjax = new Producto("3","Introduccion a Ajax");

     arrayProductos = [libroJavascript, libroPHP, libroQuery, libroAjax];

    for (i = 0; i < arrayProductos.length; i++) {
          document.getElementById("tablaProductos").innerHTML+="<tr><td>"+arrayProductos[i].nombreProducto+"</td> <td><input type='button' onclick='anyadir("+i+")'  size='50' name='btnAnyadir' value='+'></input></td></tr>";
     }
 }

 

 function anyadir(i){

     arrayCarrito.push(i);
     acumulador="<tr><td><b><u>Producto</u></b></td></tr>";

     for (var p = 0; p < arrayCarrito.length; p++) {
           
         acumulador+="<tr id='lin_"+p+"'><td>"+arrayProductos[arrayCarrito[p]].nombreProducto+"</td> <td><input type='button' onclick='quitarDeCarrito("+p+");'  size='50' value='-'></td></tr>";
     }

     document.getElementById("carrito").innerHTML=acumulador;
 }

 function quitarDeCarrito(i){
	 arrayCarrito.splice(i, 1);
	 var quita_p_carro= document.getElementById("lin_"+i);
	 quita_p_carro.parentNode.removeChild(quita_p_carro);
 }

