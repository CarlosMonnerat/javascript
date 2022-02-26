let tela = document.querySelector('canvas')
let pincel = tela.getContext('2d')

pincel.fillStyle = 'lightgrey'
pincel.fillRect(0, 0, 600, 400)

function desenhaCirculo(x, y, raio, cor){
	pincel.fillStyle = cor
	pincel.beginPath()
	pincel.arc(x, y, raio, 0, 2 * Math.PI)
	pincel.fill()
}

function limpaTela(){
	pincel.clearRect(0, 0, 600, 400)
}

var raio = 10

function desenhaAlvo(x, y){

	desenhaCirculo(x, y, raio+20, 'red')
	desenhaCirculo(x, y, raio+10, 'white')
	desenhaCirculo(x, y, raio, 'red')
}

function sorteiaPosicao(valorMaximo){

	return Math.floor(Math.random() * valorMaximo)
}

var xAleatorio
var yAleatorio

function atualizaTela(){
	limpaTela()
	xAleatorio = sorteiaPosicao(600)
	yAleatorio = sorteiaPosicao(400)
	desenhaAlvo(xAleatorio, yAleatorio)
}

setInterval(atualizaTela, 1000)

function dispara(event){

	let x = event.pageX - tela.offsetLeft
	let y = event.pageY - tela.offsetTop

	if( ( x > xAleatorio - raio )&&
		( x < xAleatorio + raio )&&
		( y > yAleatorio - raio )&&
		( y < yAleatorio + raio )){

		alert('Acertou!')
	}
}
tela.onclick = dispara