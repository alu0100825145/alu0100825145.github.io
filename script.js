$(document).ready(function() {
	impress().init();
	iracontacto(){
		impress().goto(2);	
	}
	
});
$(document).ready(function() {
	var hora = document.getElementById('horas');
	var minuto = document.getElementById('minutos');
	var segundo = document.getElementById('segundos');

	function actualiza(){
	  var hours = new Date().getHours();
	  var minutes = new Date().getMinutes();
	  var seconds = new Date().getSeconds();
	  hora.textContent=hours;
	  minuto.textContent=minutes;
	  segundo.textContent=seconds;
	}
 	var intervalo = setInterval(actualiza, 1000);
});
