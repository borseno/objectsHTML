'use strict'
var admin = {
	"name" : "Mark",
	"Age" : 17,
	"Dick" : "Always hard",
	"Hair color" : "Orange",
	"Hair length": "Middle",
	"bool" : true,
	"Height": 183,
	"Weight": 64
}
var user = {
	"name" : "Dude",
	"Age" : 43,
	"Hair color": "Black",
	"bool" : false
}
var HR_director = {
	"name" : "Victoria",
	"Age" : 23,
	"Hair color": "Did not notice",
	"Hair look": "Just nice",
	"Behaviour": "Very good",
	"Education": "Karazin University",
	"Height": "~160",
	"Weight": "~50",
	"bool" : true
}
var characters = {
	"admin" : admin,
	"user" : user,
	"HR_director" : HR_director
}
function CharacterValuesGUI() {
	let NamesButton = document.getElementById("CharacterInfo");
	// Вставляем input с id GetCharacter и кнопку с id GetCharacterButton, действие - получение данных о персонаже.
	NamesButton.innerHTML = "<br><input type = 'text' id = 'GetCharacter'>";
	NamesButton.innerHTML += "<button id = 'GetCharacterButton' onclick = 'printCharacterValues()'>Получить данные о персонаже</button><br>";
	// При нажатии enter в поле ввода происходит тоже, что и при нажатии кнопки.
	document.getElementById("GetCharacter").onkeypress = function () {
		if (event.charCode === 13) {
			printCharacterValues();
		}
	}
}

function printCharacters() {
	let Names = document.getElementById("Names"); 
	Names.innerHTML += "<br>" 
	for (var char in characters) { // перебор всех свойств обьекта characters
		Names.innerHTML += "<br>" + "<b>" + char + "</b>"; // печатаем их
	}
	CharacterValuesGUI(); // добавляем поле ввода распечатки конкретного персонажа
}

function printCharacterValues() { // получение данных о персонаже
	let GetCharacter = document.getElementById('GetCharacter');
	let Character = GetCharacter.value;
	let CharacterInfo = document.getElementById('CharacterInfo');
	
	if (characters[Character] == undefined) return false; // не печатать если такового персонажа нет
    //document.getElementById('GetCharacter').value = " ";
	CharacterInfo.innerHTML += "<br>"
	for (var p in characters[Character]) {
	CharacterInfo.innerHTML += "Значение " + p + " Персонажа " + "<b>" + Character + "</b>" + " : " + characters[Character][p] + "<br>" // Печать
	}
	CharacterInfo.innerHTML += "<br><hr>"
	// При нажатии enter в поле ввода происходит тоже, что и при нажатии кнопки.
	document.getElementById("GetCharacter").onkeypress = function () {
		if (event.charCode === 13) {
			printCharacterValues();
		}
	}
}

