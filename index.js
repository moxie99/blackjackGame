let player = {
	name: "David",
	coins: 200,
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = ""
var cardEl = document.getElementById('cardEl');
var output = document.getElementById('messageEl');
var sumEl = document.getElementById('sumEl');
let playerEl = document.getElementById('player-el');

playerEl.textContent = player.name + ": $" + player.coins; 

function getRandomNumber(){
	let randomNumber = Math.floor(Math.random() * 13) + 1;
	if(randomNumber > 10){
		return 10;
	}else if (randomNumber === 1){
		return 11;
	}else{
		return randomNumber;
	}

}

function startGame(){
	isAlive = true;
	let firstCard = getRandomNumber();
	let secondCard = getRandomNumber();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
	renderGame();
}

document.getElementById('start-game').addEventListener('click', startGame);

function renderGame() {	
	cardEl.textContent = "Cards: "
	for(let i = 0; i < cards.length; i++){
	cardEl.textContent += cards[i] + " "; 
	}

	sumEl.textContent = "Sum:" + sum;
	if (sum <= 20){
		message = "Do you want to draw a new card?"; 
	}else if (sum === 21){
		message = "Wohoo! You have got a BlackJack!";
		hasBlackJack = true
	}else {
		message= "You are out of the game!"
		isAlive = false;
	}
	output.textContent = message;
}


document.getElementById('new-game').addEventListener('click', newCard);

function newCard() {
	if(isAlive === true && hasBlackJack === false){	
	let thirdCard = getRandomNumber();
	sum+=thirdCard;
	cards.push(thirdCard);
	renderGame();
	}
}

