(function(){
	// parametros asignados a variables
	Juego = function(elementos,puntuacion,boton){
		this.elemento = elementos;
		object = this;
		this.puntuacion = puntuacion;
		this.boton = boton;
		this.turno;
		this.roleo();
		this.initialize();
	}
	Juego.prototype.roleo = function(){
		var aleatorio = Math.floor(Math.random() * (2 - 1 + 1) + 1);
		if(aleatorio == 1) this.turno = true;
		if(aleatorio == 2) this.turno = false;
	}
	//inicializacion del programa con las variables predefinidas
	Juego.prototype.initialize = function(){
		this.a1 = true;
		this.a2 = true;
		this.a3 = true;
		this.b1 = true;
		this.b2 = true;
		this.b3 = true;
		this.c1 = true;
		this.c2 = true;
		this.c3 = true;
		this.arrayUsuario = [];
		this.arrayMaquina = [];
		this.ganador = false;
		this.posX;
		this.posY;
		this.evento();
	}
	//controlador del turno
	Juego.prototype.evento=function(){
		if(this.turno){
			if(this.ganador == false) this.elemento.canvas.addEventListener("mousemove",movimento);
		}
		else if(this.turno == false) this.aleatorio(1,9);
	}
	// posicion en X y en Y dentro del canvas
	function movimento(e){
		object.posX = e.layerX - 10;
		object.posY = e.layerY -10;
		object.evento2();
	}
	// evneto click
	Juego.prototype.evento2 = function(){
		this.elemento.canvas.addEventListener("click",ponUna);
	}
	// controlador de clicks dentro del canvas
	function ponUna(){
		if(object.posX >= 0 && object.posX<= 100 && object.posY >= 0 &&object.posY<= 100){
			object.posicionA1();
		}
		if(object.posX >= 101 && object.posX<= 200 && object.posY >= 0 &&object.posY<= 100){
			object.posicionA2();
		}
		if(object.posX >= 201 && object.posX<= 300 && object.posY >= 0 &&object.posY<= 100){
			object.posicionA3();
		}
		if(object.posX >= 0 && object.posX<= 100 && object.posY >= 101 &&object.posY<= 200){
			object.posicionB1();
		}
		if(object.posX >= 101 && object.posX<= 200 && object.posY >= 101 &&object.posY<= 200){
			object.posicionB2();
		}
		if(object.posX >= 201 && object.posX<= 300 && object.posY >= 101 &&object.posY<= 200){
			object.posicionB3();
		}
		if(object.posX >= 0 && object.posX<= 100 && object.posY >= 201 &&object.posY<= 300){
			object.posicionC1();
		}
		if(object.posX >= 101 && object.posX<= 200 && object.posY >= 201 &&object.posY<= 300){
			object.posicionC2();
		}
		if(object.posX >= 201 && object.posX<= 300 && object.posY >= 201 &&object.posY<= 300){
			object.posicionC3();
		}
	}
	// controlador del movimiento de la maquina
	Juego.prototype.aleatorio=function(minimo,maximo){
		var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
		if(this.a1 == false && this.a2 == false && this.a3 == false && this.b1 == false && this.b2 == false && this.b3 == false && this.c1 == false && this.c2 == false && this.c3 == false){
			this.btn();
		}
		else{
			if(numero == 1) this.posicionA1();
			if(numero == 2) this.posicionA2();
			if(numero == 3) this.posicionA3();			
			if(numero == 4) this.posicionB1();
			if(numero == 5) this.posicionB2();
			if(numero == 6) this.posicionB3();
			if(numero == 7) this.posicionC1();
			if(numero == 8) this.posicionC2();
			if(numero == 9) this.posicionC3();
		}
	}
	//controlador de posiciones
////////////////////////////////////////////////////////////////////////////////////////////
	// primera posicion A1
	Juego.prototype.posicionA1=function(){
		if(this.a1 == true){
			if(this.turno == true){
				this.elemento.dibujarCirculo(50,50);
				this.arrayUsuario[0] = 1;
				this.turno = false;
				this.victoria();
			}
			else if(this.turno == false){
				this.elemento.dibujarMaquina(20,20,70,70,70,20,20,70);
				this.arrayMaquina[0] = 1;
				this.turno = true;
				this.victoriaMaquina();
			}
			this.a1 = false;
		}else if(this.a1 == false){
			if(this.turno == true){
				alert("la posicion ya esta ocupada elige otra posicion");
			}
			else if(this.turno == false){
				this.aleatorio(1,9);
			}
		}
		this.evento();
	}
	// segunda posicion A2
	Juego.prototype.posicionA2=function(){
		if(this.a2 == true){
			if(this.turno == true){
				this.elemento.dibujarCirculo(150,50);
				this.arrayUsuario[1] = 2;
				this.turno = false;
				this.victoria();
			}
			else if(this.turno==false){
				this.elemento.dibujarMaquina(120,20,170,70,170,20,120,70);
				this.arrayMaquina[1] = 2;
				this.turno = true;
				this.victoriaMaquina();
			}
			this.a2 = false;
		}
		else if(this.a2 == false){
			if(this.turno == true){
				alert("la posicion ya esta ocupada elige otra posicion");
			}
			else if(this.turno == false){
				this.aleatorio(1,9);
			}
		}
		this.evento();
	}
	// tercera posicion A3
	Juego.prototype.posicionA3=function(){
		if(this.a3 == true){
			if(this.turno == true){
				this.elemento.dibujarCirculo(250,50);
				this.arrayUsuario[2] = 3;
				this.turno = false;
				this.victoria();
			}
			else if(this.turno==false){
				this.elemento.dibujarMaquina(220,20,270,70,270,20,220,70);
				this.arrayMaquina[2] = 3;
				this.turno = true;
				this.victoriaMaquina();
			}
			this.a3 = false;
		}
		else if(this.a3 == false){
			if(this.turno == true){
				alert("la posicion ya esta ocupada elige otra posicion");
			}
			else if(this.turno == false){
				this.aleatorio(1,9);
			}
		}
		this.evento();
	}
	// primera posicion B1
	Juego.prototype.posicionB1=function(){
		//  A
		if(this.b1 == true){
			if(this.turno == true){
				this.elemento.dibujarCirculo(50,150);
				this.arrayUsuario[3] = 4;
				this.turno = false;
				this.victoria();
			}
			else if(this.turno==false){
				this.elemento.dibujarMaquina(20,120,70,170,70,120,20,170);
				this.arrayMaquina[3] = 4;
				this.turno = true;
				this.victoriaMaquina();
			}
			this.b1 = false;
		}
		else if(this.b1 == false){
			if(this.turno == true){
				alert("la posicion ya esta ocupada elige otra posicion");
			}
			else if(this.turno == false){
				this.aleatorio(1,9);
			}
		}
		this.evento();
	}
	// segunda posicion B2
	Juego.prototype.posicionB2=function(){
		//  S
		if(this.b2 == true){
			if(this.turno == true){
				this.elemento.dibujarCirculo(150,150);
				this.arrayUsuario[4] =5;
				this.turno = false;
				this.victoria();
			}
			else if(this.turno==false){
				this.elemento.dibujarMaquina(120,120,170,170,170,120,120,170);
				this.arrayMaquina[4] =5;
				this.turno = true;
				this.victoriaMaquina();
			}
			this.b2 = false;
		}
		else if(this.b2 == false){
			if(this.turno == true){
				alert("la posicion ya esta ocupada elige otra posicion");
			}
			else if(this.turno == false){
				this.aleatorio(1,9);
			}
		}
		this.evento();
	}
	// tercera posicion B3
	Juego.prototype.posicionB3=function(){
		//  D
		if(this.b3 == true){
			if(this.turno == true){
				this.elemento.dibujarCirculo(250,150);
				this.arrayUsuario[5] = 6;
				this.turno = false;
				this.victoria();
			}
			else if(this.turno==false){
				this.elemento.dibujarMaquina(220,120,270,170,270,120,220,170);
				this.arrayMaquina[5] = 6;
				this.turno = true;
				this.victoriaMaquina();
			}
			this.b3 = false;
		}
		else if(this.b3 == false){
			if(this.turno == true){
				alert("la posicion ya esta ocupada elige otra posicion");
			}
			else if(this.turno == false){
				this.aleatorio(1,9);
			}
		}
		this.evento();
	}
	// primera posicion C1
	Juego.prototype.posicionC1=function(){
		//  Z
		if(this.c1 == true){
			if(this.turno == true){
				this.elemento.dibujarCirculo(50,250);
				this.arrayUsuario[6] = 7;
				this.turno = false;
				this.victoria();
			}
			else if(this.turno==false){
				this.elemento.dibujarMaquina(20,220,70,270,70,220,20,270);
				this.arrayMaquina[6] = 7;
				this.turno = true;
				this.victoriaMaquina();
			}
			this.c1=false;
		}
		else if(this.c1 == false){
			if(this.turno == true){
				alert("la posicion ya esta ocupada elige otra posicion");
			}
			else if(this.turno == false){
				this.aleatorio(1,9);
			}
		}
		this.evento();
	}
	// segunda posicion C2
	Juego.prototype.posicionC2=function(){
		//  X
		if(this.c2 == true){
			if(this.turno == true){
				this.elemento.dibujarCirculo(150,250);
				this.arrayUsuario[7] = 8;
				this.turno = false;
				this.victoria();
			}
			else if(this.turno==false){
				this.elemento.dibujarMaquina(120,220,170,270,170,220,120,270);
				this.arrayMaquina[7] = 8;
				this.turno = true;
				this.victoriaMaquina();
			}
			this.c2 = false;
		}
		else if(this.c2 == false){
			if(this.turno == true){
				alert("la posicion ya esta ocupada elige otra posicion");
			}
			else if(this.turno == false){
				this.aleatorio(1,9);
			}
		}
		this.evento();
	}
	// tercera posicion C3
	Juego.prototype.posicionC3=function(){
		//  C
		if(this.c3){
			if(this.turno == true){
				this.elemento.dibujarCirculo(250,250);
				this.arrayUsuario[8] = 9;
				this.turno = false;
				this.victoria();
			}
			else if(this.turno==false){
				this.elemento.dibujarMaquina(220,220,270,270,270,220,220,270);
				this.arrayMaquina[8] = 9;
				this.turno = true;
				this.victoriaMaquina();
			}
			this.c3 = false;
		}
		else if(this.c3 == false){
			if(this.turno == true){
				alert("la posicion ya esta ocupada elige otra posicion");
			}
			else if(this.turno == false){
				this.aleatorio(1,9);
			}
		}
		this.evento();
	}
////////////////////////////////////////////////////////////////////////////////////////////
	// analisis si gana el usuario
	// analisis usuario
	Juego.prototype.victoria = function(){
		if(this.ganador == false){
			if(this.arrayUsuario[0] == 1 && this.arrayUsuario[1] == 2 && this.arrayUsuario[2] == 3){
				this.elemento.dibujoDeVictoria(0, 50, 300, 50);
				this.ganador = true;
				// window.location.reload();
			}
			if(this.arrayUsuario[3] == 4 && this.arrayUsuario[4] == 5 && this.arrayUsuario[5] == 6){
				this.elemento.dibujoDeVictoria(0, 150, 300, 150);
				this.ganador = true;
			}
			if(this.arrayUsuario[6] == 7 && this.arrayUsuario[7] == 8 && this.arrayUsuario[8] == 9){
				this.elemento.dibujoDeVictoria(0, 250, 300, 250);
				this.ganador = true;
			}
			//verticales
			if(this.arrayUsuario[0] == 1 && this.arrayUsuario[3] == 4 && this.arrayUsuario[6] == 7){
				this.elemento.dibujoDeVictoria(50, 0, 50, 300);
				this.ganador = true;
			}
			if(this.arrayUsuario[1] == 2 && this.arrayUsuario[4] == 5 && this.arrayUsuario[7] == 8){
				this.elemento.dibujoDeVictoria(150, 0, 150, 300);
				this.ganador = true;
			}
			if(this.arrayUsuario[2] == 3 && this.arrayUsuario[5] == 6 && this.arrayUsuario[8] == 9){
				this.elemento.dibujoDeVictoria(250, 0,250, 300);
				this.ganador = true;
			}
			//diagonales
			if(this.arrayUsuario[0] == 1 && this.arrayUsuario[4] == 5 && this.arrayUsuario[8] == 9){
				this.elemento.dibujoDeVictoria(0,0, 300, 300);
				this.ganador = true;
			}
			if(this.arrayUsuario[2] == 3 && this.arrayUsuario[4] == 5 && this.arrayUsuario[6] == 7){
				this.elemento.dibujoDeVictoria(300,0, 0, 300);
				this.ganador = true;
			}
			if(this.ganador == true){
				alert("ganaste");
				this.puntuacion.sumarUsuario();
				noRepetir();
				this.btn();
			}
		}
	}
	////////////////////////////////////////////////////////////////////////////////////////
	// analisis maquina
	Juego.prototype.victoriaMaquina = function(){
		if(this.ganador == false){
			if(this.arrayMaquina[0] == 1 && this.arrayMaquina[1] == 2 && this.arrayMaquina[2] == 3){
				this.elemento.dibujoDeVictoria(0, 50, 300, 50);
				this.ganador = true;
				// window.location.reload();
			}
			if(this.arrayMaquina[3] == 4 && this.arrayMaquina[4] == 5 && this.arrayMaquina[5] == 6){
				this.elemento.dibujoDeVictoria(0, 150, 300, 150);
				this.ganador = true;
			}
			if(this.arrayMaquina[6] == 7 && this.arrayMaquina[7] == 8 && this.arrayMaquina[8] == 9){
				this.elemento.dibujoDeVictoria(0, 250, 300, 250);
				this.ganador = true;
			}
			//verticales
			if(this.arrayMaquina[0] == 1 && this.arrayMaquina[3] == 4 && this.arrayMaquina[6] == 7){
				this.elemento.dibujoDeVictoria(50, 0, 50, 300);
				this.ganador = true;
			}
			if(this.arrayMaquina[1] == 2 && this.arrayMaquina[4] == 5 && this.arrayMaquina[7] == 8){
				this.elemento.dibujoDeVictoria(150, 0, 150, 300);
				this.ganador = true;
			}
			if(this.arrayMaquina[2] == 3 && this.arrayMaquina[5] == 6 && this.arrayMaquina[8] == 9){
				this.elemento.dibujoDeVictoria(250, 0,250, 300);
				this.ganador = true;
			}
			//diagonales
			if(this.arrayMaquina[0] == 1 && this.arrayMaquina[4] == 5 && this.arrayMaquina[8] == 9){
				this.elemento.dibujoDeVictoria(0,0, 300, 300);
				this.ganador = true;
			}
			if(this.arrayMaquina[2] == 3 && this.arrayMaquina[4] == 5 && this.arrayMaquina[6] == 7){
				this.elemento.dibujoDeVictoria(300,0, 0, 300);
				this.ganador = true;
			}
			if(this.ganador == true){
				alert("perdiste!! Te Gano la Maquina :'(");
				this.puntuacion.sumarMaquina();
				noRepetir();
				this.btn();
			}
		}
	}
	function noRepetir(){
		object.a1 = false;
		object.a2 = false;
		object.a3 = false;
		object.b1 = false;
		object.b2 = false;
		object.b3 = false;
		object.c1 = false;
		object.c2 = false;
		object.c3 = false;
	}
	Juego.prototype.btn = function(){
		this.boton.style.display = "inline-block";
		this.boton.addEventListener("click",object.reset);
	}
	Juego.prototype.reset = function(){
		object.elemento.borrar();
		object.elemento.tabla();
		object.roleo();
		object.initialize();
	}
}());
