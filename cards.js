let create = document.getElementById("createButton");
let input = document.getElementById("input1");
let output = document.getElementById("cards");

create.addEventListener("click", function(){
	output.innerHTML += "<div class='innerDiv'>" + input.value + "<button class='delete'" + "id='delete'>" + "Delete" + "</button>" + "</div>";
	Delete()
})

function Delete() {
	var deleteButton = document.getElementsByClassName('delete');
	for(i = 0; i < deleteButton.length; i++){
		var NewCard = deleteButton[i];
		NewCard.addEventListener('click', function (event){
			event.path[1].remove();
		});
	}
}
