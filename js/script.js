function getCell(number) {
	return document.getElementById("c" + number).innerHTML;
}

function checkRow(a, b, c, d) {
	var result = false;
	if (getCell(a) == "_" || getCell(b) == "_" || getCell(c) == "_" || getCell(d) == "_") {
		result = true;
	} else if (getCell(a) == getCell(b) != "_") {
		result = true;
	} else if (getCell(b) == getCell(c) != "_") {
		result= true;
	} else if (getCell(c) == getCell(d) != "_")  {
		result = true;
	} return result;
}

function slideLR(al, bl, cl, dl) {
	var left = false;
	if(getCell(al) == getCell(bl) && getCell(al) != "_") {
		document.getElementById("c" + al).innerHTML = document.getElementById("c" + al).innerHTML*2;
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + cl).innerHTML;
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";
		left = true;
	} if(getCell(bl) == getCell(cl) && getCell(bl) != "_") {
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + bl).innerHTML*2;
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";
		left = true;
	} if(getCell(cl) == getCell(dl) && getCell(cl) != "_") {
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + cl).innerHTML*2;
		document.getElementById("c" + dl).innerHTML = "_";
		left = true;
	} if (document.getElementById("c" + al).innerHTML == "_") {
		document.getElementById("c" + al).innerHTML = document.getElementById("c" + bl).innerHTML;
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + cl).innerHTML;
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";
		left = true;
	} if (document.getElementById("c" + bl).innerHTML == "_") {
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + cl).innerHTML;
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";
		left=true;
	} if (document.getElementById("c" + cl).innerHTML == "_") {
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";
		left=true
	} return left;
}

function slideLRAll(aa, ba, ca, da) {
	for (var i = 0; i + da <= 16; i++)
	slideLeft(aa+ i*4, ba+i*4, ca+i*4, da+i*4);
}

