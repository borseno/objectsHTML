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
	"Height": 160,
	"Weight": 50
}
var characters = {
	"admin" : admin,
	"user" : user
}
function CharacterValuesGUI() {
	let NamesButton = document.getElementById("CharacterInfo");
	NamesButton.innerHTML = "<p id = 'lol'> <input type = 'text' id = 'GetCharacter'> </p>";
	document.getElementById("lol").innerHTML += "<button id = 'GetCharacterButton' onclick = 'printCharacterValues()'>Получить данные о персонаже</button>";
	document.getElementById("GetCharacter").onkeypress = function () {
	if (event.charCode === 13) {
		printCharacterValues();
	}
}
}

function printCharacters() {
	let Names = document.getElementById("Names");
	Names.innerHTML += "<br>"
	for (var char in characters) {
		Names.innerHTML += "<br>" + "<b>" + char + "</b>";
	}
	CharacterValuesGUI();
}
function printCharacterValues() {
	let GetCharacter = document.getElementById('GetCharacter');
	let OurCharacter = GetCharacter.value;
	if (characters[OurCharacter] == undefined) return -1;
	var CharacterInfo = document.getElementById('CharacterInfo');
    //document.getElementById('GetCharacter').value = " ";
	for (var p in characters[OurCharacter]) {
	CharacterInfo.innerHTML += "Значение " + p + " Персонажа " + "<b>" + OurCharacter + "</b>" + " : " + characters[OurCharacter][p] + "<br>"
	}	
	CharacterInfo.innerHTML += "<br><hr>"
	document.getElementById("GetCharacter").onkeypress = function () {
	if (event.charCode === 13) {
		printCharacterValues();
	}
}
}

