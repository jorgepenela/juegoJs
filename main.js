class Player{
	constructor(nombre,vida,stamina){
		this.nombre= nombre;
		this.vida=vida;
		this.vidatotal=vida;
		this.stamina=0;
	}
}
var player1 = new Player('Player1',20);
var player2 = new Player('Player2',20);
/*var player1 = {
	nombre : "player 1",
	vida : 10,	
}

var player2 = {
	nombre : "player 2",
	vida : 30,
}*/

// imagenes
const personaje1 = document.querySelector('#pj1');

// timer accion
var beatfull = document.querySelector('.beatfull');		

//vida
var lifebar = document.querySelector('.lifebar div');


function iniciar(){
	console.log('inicia el juego');


	resetvida();
	var intervalo = setInterval(accion, 4000);
	
	document.querySelector('#home').classList.add('hidden');	


	function ko(e){
	    if(e.vida <= 0){
	    	barravida(player1);
	      document.querySelector('.mensa h1').innerHTML='K.O.';
	      beatfull.classList.remove('contar');
	      // quien gano?
	      if(player1.vida > 0 && player2.vida <=0){
	      	barravida(player1);
	      	document.querySelector('.mensa h2').innerHTML='gano player1';
	      	personaje1.setAttribute('class',''); 
	      	personaje1.classList.add('win');

	      } else if(player1.vida<=0 && player2.vida>0){
	      	barravida(player1);
	      	document.querySelector('.mensa h2').innerHTML='gano player2';
	      	personaje1.setAttribute('class',''); 
	      	personaje1.classList.add('lose');

	      } else{
	      	barravida(player1);
	      	document.querySelector('.mensa h2').innerHTML='Empate';
	      	personaje1.setAttribute('class',''); 
	      	personaje1.classList.add('lose');
	      }      
	      // frenamos el juego
	      clearInterval(intervalo);
	    }
	}

	function resetvida(){		
		//document.querySelector('.saludp1').innerHTML = player1.vida;
		document.querySelector('.saludp2').innerHTML = player2.vida;
	}

	function golpe(e){
		e.vida= e.vida-2;				
		personaje1.setAttribute('class',''); 
		personaje1.classList.add('punch');
		barravida(player1);
		resetvida();
		ko(e);
	}
	function defensa(yo){
		yo.vida = yo.vida + 1;		
		personaje1.setAttribute('class',''); 
		personaje1.classList.add('def');
		barravida(player1);
		resetvida();		
	}
	function especial(e){
		e.vida = e.vida-4;
		personaje1.setAttribute('class',''); 
		personaje1.classList.add('esp');
		barravida(player1);
		resetvida();		
		ko(e);
	}

	function barravida(p){
		var ancho = 100/p.vidatotal*p.vida;
		if(ancho > 0){
			lifebar.style.width = ancho+'%';		
		}else{
			lifebar.style.width = 0+'%';		
		}
		
		
	}

	function accion(){	
		p1 = document.querySelectorAll('input[name=p1]');
		
		beatfull.classList.add('contar');
		
		if(p1[0].checked == true){
			golpe(player2);			

		} else if(p1[1].checked == true){
			defensa(player1);			

		} else if(p1[2].checked == true){
			especial(player2);			
		} 


		// ACA ESTA EL ERROR DE ANIMACION!
		p2 = document.querySelectorAll('input[name=p2]');
		
		if(p2[0].checked){
			golpe(player1);
		} else if(p2[1].checked){
			defensa(player2);
		} else{
			especial(player1);
		}

		
	}

};


function reiniciar(){
	player1.vida = 10;
	player2.vida = 10;
	iniciar()
}

// INICIALIZAR

