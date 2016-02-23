var puntos=0;
var posYRaton=0;
var pos=0;
var objeto_cohete=document.getElementById("cohete"); 
var proyectil=document.getElementById("proyectil");
 proyectil.style.visibility="hidden";
 proyectil.style.position="absolute";
 objeto_cohete.style.position="absolute";



 document.onclick=disparar;


var posicion_nave=0;
         

function cambiarPosicion(event){
         //console.log("raton " +event.clientY);
      	
      	 objeto_cohete.style.top=(event.clientY + 'px');
         posicion_nave=event.clientY+"px";
}

      function moverMonstruo(){
      	var monstruo=document.getElementById("monstruo");
        var pos2=0;
        monstruo.style.marginLeft="-300px";
          setInterval(function(){
             pos2=Math.floor(Math.random()*600) + 1;
             
             	monstruo.style.top=pos2+"px";
    

         },1000);
      }

    function disparar(){
        proyectil.style.visibility="visible";
        proyectil.style.marginTop=posicion_nave;
        var coord=0;
        var intervalo=setInterval(function(){
            proyectil.style.marginLeft=coord + "px";
            coord=coord+5;
            console.log(proyectil.style.marginLeft);
            if(coord>=1300){
              coord=0;
              proyectil.style.visibility="hidden";
              clearInterval(intervalo);

            }

            if(colision(monstruo,proyectil)){
              proyectil.style.visibility="hidden";
              document.getElementById("divPuntos").innerHTML = "Puntos: "+puntos;
              puntos=puntos+1;
            }

        },1);
    }


function colision(a, b) {
    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    );
}



