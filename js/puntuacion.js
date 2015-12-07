(function(){
	Puntuacion=function(contadorUsuario,contadorMaquina){
		this.contadorUsuario = contadorUsuario;
		this.contadorMaquina = contadorMaquina;
	}
	Puntuacion.prototype.sumaUsuario = 0;
	Puntuacion.prototype.sumaMaquina = 0;
	Puntuacion.prototype.sumarUsuario = function(){
		this.sumaUsuario++;
		this.contadorUsuario.textContent = this.sumaUsuario;
	}
	Puntuacion.prototype.sumarMaquina = function(){
		this.sumaMaquina++;
		this.contadorMaquina.textContent = this.sumaMaquina;
	}
})();