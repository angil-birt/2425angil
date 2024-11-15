function erakutsiAlerta() {
	alert("Ongi etorri! El que quiera participar en el concurso anual, apuntaros a través de Contacto");
}
function volver() {
	history.back();
}
function massobrenosotros() {
	confirm("¡A mí me gusta el piripiripipi...!"); 
} 
function anadirTexto() { 
	var div = document.getElementById("anhadirtexto"); 
	div.innerHTML += " ¡El mejor de los entornos!"; 
}
document.addEventListener(
	"DOMContentLoaded", function() { 
	var boton = document.getElementById("miBoton"); 
	boton.addEventListener("click", anadirTexto); 
	}
);
document.addEventListener("DOMContentLoaded", function() {
	var tabla = document.getElementById("Recetas"); 
	tabla.addEventListener("mouseover", function() { 
		tabla.classList.add("hovered"); }); 
	tabla.addEventListener("mouseout", function() { 
		tabla.classList.remove("hovered"); }); 
	}
);
