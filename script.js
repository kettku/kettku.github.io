var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");




function inputLength() {
	return input.value.length;
}

function dButton(){
	var btn=document.createElement("button");
btn.appendChild(document.createTextNode("x"));
li[i].appendChild(btn);
btn.onclick=removeParent;
}

function removeListElement() {
    document.ul.removeChild(li);
}


for(var i=0; i<li.length; i++){
	li[i].addEventListener("click", changeClass);
   }

function changeClass(){
	 this.classList.toggle("done");
   }

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("x"));
 	li.appendChild(btn);
 	btn.onclick = removeParent;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

function liLength(){
	return li.length;
}

for( i=0;i<liLength();i++){
	dButton();
	}

function removeParent(evt){
		evt.target.parentNode.remove();
}