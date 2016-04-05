function getCell(number) {
	return document.getElementById("c" + number).innerHTML;
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



function slideLR(al, bl, cl, dl) {
	var slide = false;
	if(getCell(al) == getCell(bl) && getCell(al) != "_") {
		document.getElementById("c" + al).innerHTML = document.getElementById("c" + al).innerHTML*2;
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + cl).innerHTML;
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";
		slide = true;
	} if(getCell(bl) == getCell(cl) && getCell(bl) != "_") {
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + bl).innerHTML*2;
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";
		slide = true;
	} if(getCell(cl) == getCell(dl) && getCell(cl) != "_") {
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + cl).innerHTML*2;
		document.getElementById("c" + dl).innerHTML = "_";
		slide = true;
	} if (getCell(al) == getCell(cl) && getCell(bl) == "_" && getCell(al) != "_") {
		document.getElementById("c" + al).innerHTML = document.getElementById("c" + al).innerHTML*2;
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + cl).innerHTML = "_";
		document.getElementById("c" + dl).innerHTML = "_";
	} if (getCell(bl) == getCell(dl) && getCell(cl) == "_" && getCell(bl) != "_") {
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + bl).innerHTML*2;
		document.getElementById("c" + cl).innerHTML = "_";
		document.getElementById("c" + dl).innerHTML = "_";
	}if (getCell(al) == getCell(dl) && getCell(bl) == getCell(cl) && getCell(bl) =="_" && getCell(al) != "_") {
		document.getElementById("c" + al).innerHTML = document.getElementById("c" + al).innerHTML*2;
		document.getElementById("c" + bl).innerHTML = "_";
		document.getElementById("c" + cl).innerHTML = "_";
		document.getElementById("c" + dl).innerHTML = "_";
	} for (var i = 0; i<=1; i++) {
		if (document.getElementById("c" + al).innerHTML == "_") {
		document.getElementById("c" + al).innerHTML = document.getElementById("c" + bl).innerHTML;
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + cl).innerHTML;
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";
		slide = true;
		} if (document.getElementById("c" + bl).innerHTML == "_") {
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + cl).innerHTML;
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";
		slide=true;
		} if (document.getElementById("c" + cl).innerHTML == "_") {
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";
		slide=true;
	}
	} return slide;
}

function slideLRAll(aa, ba, ca, da) {
	for (var i = 0; i + da <= 16; i++)
	slideLR(aa+ i*4, ba+i*4, ca+i*4, da+i*4);
}

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        slideLRAll(1, 2, 3, 4);

        case 38: // up
        break;

        case 39: // right
        slideLRAll(4, 3, 2, 1);

        case 40: // down
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});