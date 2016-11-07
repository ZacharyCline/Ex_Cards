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
	createCard();
	document.getElementById("input1").value = '';
}

document.getElementById("createButton").addEventListener("click", add);
// var outputDiv = document.getElementById("output");

// function deleteCard(card){
// 	card.remove();
// }


// function buildCard(){
// 	outputDiv.innerHTML += 
// 	"<section class='cards'>"
// 	 + document.getElementById("textInput").value 
// 	 + "<button class='deleteBtns'>" + "Delete" + "</button>" 
// 	 + "</section>";
// }




// function addCard(){
// 	buildCard();
// 	document.getElementById("textInput").value = '';
// }


// document.getElementById("createBtn").addEventListener("click", addCard);