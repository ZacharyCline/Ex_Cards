// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.

var usertext = document.getElementById('input1');


function removeCard(card) {
	card.remove();
}


function createCard() {
	usertext.innerHTML += "<section class='cards'>" + document.getElementById("input1").value + "<button class = 'deleteButton'>" + "Delete" + "</buton>" + "</section>";
	outputDiv.addEventListener("click", function(e){
		deleteCard(e.target.parentNode);
	})
}


function add(){
	document.getElementById("input1").value = '';
	createCard();
}

document.getElementById("createButton").addEventListener("click", add);
