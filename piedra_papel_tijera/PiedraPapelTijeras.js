var jugador=prompt("Introduce piedra papel o tijera");
var maquina=Math.random().toFixed(2);
var resultado=" ";


if(maquina>=0 && maquina <=0.33){
	resultado="piedra";
}else if (maquina>=0.34 && maquina <=0.66){
	resultado="papel";
}else if(maquina>=0.67 && maquina<=0.99){
	resultado="tijeras";
}
document.write("Jugador: "+ jugador);
document.write("<br>");
document.write("Computer: "+ resultado);
document.write("<br>");

if(jugador=="piedra" && resultado=="tijeras"){
	document.write("<h1 class='ganador'>¡Gana jugador!</h1>");
}else if(jugador=="papel" && resultado=="piedra"){
	document.write("<h1 class='ganador'>¡Gana jugador!</h1>");
}else if(jugador=="tijeras" && resultado=="papel"){
	document.write("<h1 class='ganador'>¡Gana jugador!</h1>");
}else if(jugador==resultado){
	document.write("<h1 class='empate'>Empate</h1>");
}else{
	document.write("<h1 class='perdedor'>Pierde jugador</h1>");
}

