let gatinhoList = [
  './gato1.gif',
	'./gato2.gif',
	'./gato3.gif',
	'./gato4.gif',
	'./gato5.gif',
	'./gato6.gif',
]

let counter = 0;

let before = document.getElementById('seta');

let gatinho = document.querySelector('#gato');

let next = document.getElementById('seta1');

before.addEventListener('click', function(){
    if ( counter > 0) {
      counter = counter - 1;
      gatinho.setAttribute('src', gatinhoList[counter]);
    }
})

next.addEventListener('click', function(){
    if ( counter < 5) {
      counter = counter + 1;
      gatinho.setAttribute('src', gatinhoList[counter]);
    } 
})