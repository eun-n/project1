function getCell(number) {
	return document.getElementById("c" + number).innerHTML;
}
var score = 0;
function setMessage() {
	document.getElementById("message").innerHTML=score;
}

// function checkRow(a, b, c, d) {
// 	var result = false;
// 	if (getCell(a) == "_" || getCell(b) == "_" || getCell(c) == "_" || getCell(d) == "_") {
// 		result = true;
// 	} else if (getCell(a) == getCell(b) != "_") {
// 		result = true;
// 	} else if (getCell(b) == getCell(c) != "_") {
// 		result= true;
// 	} else if (getCell(c) == getCell(d) != "_")  {
// 		result = true;
// 	} return result;
// }

// new tile distribution: 90% 2, 10% 4//
function newNumber() {
	var prob = Math.random();
	if(prob <=0.90) {
		return 2;
	} else {
		return 4;
	}
}
function newTile() {
	for (var s=1; s<=16; s++) {
		if (document.getElementById("c" + s) == "_")  {
			document.getElementById("c" + s) = newNumber();
			s=s+20;
		}
	}
}


function slideLR(al, bl, cl, dl) {

	if(getCell(al) == getCell(bl) && getCell(al) != "_") {
		document.getElementById("c" + al).innerHTML = document.getElementById("c" + al).innerHTML*2;
		score = score + parseInt(document.getElementById("c" + al).innerHTML);
		 setMessage(score);
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + cl).innerHTML;
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";
		newTile();
	} if(getCell(bl) == getCell(cl) && getCell(bl) != "_") {
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + bl).innerHTML*2;
		 setMessage(score);
		score = score + parseInt(document.getElementById("c" + bl).innerHTML);
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";
	} if(getCell(cl) == getCell(dl) && getCell(cl) != "_") {
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + cl).innerHTML*2;
		 setMessage(score);
		score = score + parseInt(document.getElementById("c" + cl).innerHTML);
		document.getElementById("c" + dl).innerHTML = "_";
	} if (getCell(al) == getCell(cl) && getCell(bl) == "_" && getCell(al) != "_") {
		document.getElementById("c" + al).innerHTML = document.getElementById("c" + al).innerHTML*2;
		 setMessage(score);
		score = score + parseInt(document.getElementById("c" + al).innerHTML);
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + cl).innerHTML = "_";
		document.getElementById("c" + dl).innerHTML = "_";
	} if (getCell(bl) == getCell(dl) && getCell(cl) == "_" && getCell(bl) != "_") {
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + bl).innerHTML*2;
		 setMessage(score);
		score = score + parseInt(document.getElementById("c" + bl).innerHTML);
		document.getElementById("c" + cl).innerHTML = "_";
		document.getElementById("c" + dl).innerHTML = "_";
	}if (getCell(al) == getCell(dl) && getCell(bl) == getCell(cl) && getCell(bl) =="_" && getCell(al) != "_") {
		document.getElementById("c" + al).innerHTML = document.getElementById("c" + al).innerHTML*2;
		 setMessage(score);
		score = score + parseInt(document.getElementById("c" + al).innerHTML);
		document.getElementById("c" + bl).innerHTML = "_";
		document.getElementById("c" + cl).innerHTML = "_";
		document.getElementById("c" + dl).innerHTML = "_";
	} for (var i = 0; i<=1; i++) {
		if (document.getElementById("c" + al).innerHTML == "_") {
		document.getElementById("c" + al).innerHTML = document.getElementById("c" + bl).innerHTML;
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + cl).innerHTML;
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";
		} if (document.getElementById("c" + bl).innerHTML == "_") {
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + cl).innerHTML;
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";
		} if (document.getElementById("c" + cl).innerHTML == "_") {
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";
	}
	} return score;
}

function slideLRAll(aa, ba, ca, da) {
	for (var j = 0; j <= 4; j++)
	slideLR(aa+ j*4, ba+j*4, ca+j*4, da+j*4);
}

function slideUDAll(au, bu, cu, du) {
	for (var k = 0; k <=4; k++)
	slideLR(au+ k, bu+k, cu+k, du+k);
}

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        slideLRAll(1, 2, 3, 4);


        case 38: // up
        slideUDAll(1, 5, 9, 13);

        case 39: // right
        slideLRAll(4, 3, 2, 1);

        case 40: // down
        slideUDAll(13, 9, 5, 1);

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});