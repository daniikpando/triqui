(function(){
	App = function(canvas){
		this.canvas = canvas;
		this.canvas.height = 300;
		this.canvas.width = 300;
		this.ctx = this.canvas.getContext('2d');
	}
	App.prototype.tabla = function(){
		this.ctx.beginPath();
		this.ctx.moveTo(0,100);
		this.ctx.lineTo(300,100);
		this.ctx.moveTo(0,200);
		this.ctx.lineTo(300,200);
		this.ctx.moveTo(100,0);
		this.ctx.lineTo(100,300);
		this.ctx.moveTo(200,0);
		this.ctx.lineTo(200,300);
		this.ctx.lineWidth = "5";
		this.ctx.strokeStyle = "#000";
		this.ctx.stroke();
		this.ctx.closePath();
	}
	App.prototype.dibujarCirculo = function(posX,posY){
		this.ctx.beginPath();
		this.ctx.arc(posX,posY,30,0,Math.PI*2,true);
		this.ctx.strokeStyle = "#000";
		this.ctx.stroke();
		this.ctx.closePath();
	}
	App.prototype.dibujarMaquina = function(line1posX,line1posY,line1afterX,line1afterY,line2posX,line2posY,line2afterX,line2afterY){
		this.ctx.beginPath();
		this.ctx.moveTo(line1posX,line1posY);
		this.ctx.lineTo(line1afterX,line1afterY);
		this.ctx.moveTo(line2posX,line2posY);
		this.ctx.lineTo(line2afterX,line2afterY);
		this.ctx.strokeStyle = "#000";
		this.ctx.stroke();
		this.ctx.closePath();
	}
	App.prototype.dibujoDeVictoria = function(posX,posY,afterX,afterY){
		this.ctx.beginPath();
		this.ctx.moveTo(posX,posY);
		this.ctx.lineTo(afterX,afterY);
		this.ctx.strokeStyle = "red";
		this.ctx.stroke();
		this.ctx.closePath();
	}
	App.prototype.borrar = function(){
		this.ctx.clearRect(0,0,300,300);
	}
})();

window.onload = function(){
	var canvas = document.getElementById('canvas');
	app = new App(canvas);
	app.tabla();
	var contadorUsuario = document.getElementById('contadorUsuario');
	var contadorMaquina = document.getElementById('contadorMaquina');
	var restaurar = document.getElementById('boton');
	puntuacion = new Puntuacion(contadorUsuario,contadorMaquina);
	juego = new Juego(app,puntuacion,restaurar);
	// juego.evento();
}

//horizontales
	// instancia.dibujoDeVictoria(0, 50, 300, 50);
	// instancia.dibujoDeVictoria(0, 150, 300, 150);
	// instancia.dibujoDeVictoria(0, 250, 300, 250);
//verticales
	//instancia.dibujoDeVictoria(50, 0, 50, 300);
	//instancia.dibujoDeVictoria(150, 0, 150, 300);
	// instancia.dibujoDeVictoria(250, 0,250, 300);
//diagonales
	// instancia.dibujoDeVictoria(0,0, 300, 300);
	// instancia.dibujoDeVictoria(300,0, 0, 300);