//function to get a specific cell
function getCell(number) {
	return document.getElementById("c" + number).innerHTML;
}
//score variable, points are calculated by adding combined values (so combining 2 + 2 will give you 4 points)
var score = 0;
//function to display current score on the page
function setMessage() {
	document.getElementById("message").innerHTML=score;
}


// new tile distribution: 90% 2, 10% 4//
function newNumber() {
	var prob = Math.random();
	if(prob <=0.90) {
		return 2;
	} else {
		return 4;
	}
}

//function to create a new tile, still not balanced for probability across blank tiles
function newTile() {
	for (var s=1; s<17; s++) {
		if (document.getElementById("c" + s).innerHTML === "_")  {
			document.getElementById("c" + s).innerHTML = newNumber();
			s=s+16;
		} console.log(s);
	}
}

//function for sliding rules for cells when there are duplicates or blank cells
// did not use "else if" statements as multiple lines will need to execute simultaneously
function slide(al, bl, cl, dl) {

	//cells al and bl can be combined xx__
	if(getCell(al) == getCell(bl) && getCell(al) != "_") {
		document.getElementById("c" + al).innerHTML = document.getElementById("c" + al).innerHTML*2;
		score = score + parseInt(document.getElementById("c" + al).innerHTML);
		 setMessage(score);
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + cl).innerHTML;
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";

		//cells bl and cl can be combined zxx_
	} if(getCell(bl) == getCell(cl) && getCell(bl) != "_") {
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + bl).innerHTML*2;
		 setMessage(score);
		score = score + parseInt(document.getElementById("c" + bl).innerHTML);
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";

		//cells cl and dl can be combined zcxx
	} if(getCell(cl) == getCell(dl) && getCell(cl) != "_") {
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + cl).innerHTML*2;
		 setMessage(score);
		score = score + parseInt(document.getElementById("c" + cl).innerHTML);
		document.getElementById("c" + dl).innerHTML = "_";

		//cells al and cl can be combined if bl is blank x_xz
	} if (getCell(al) == getCell(cl) && getCell(bl) == "_" && getCell(al) != "_") {
		document.getElementById("c" + al).innerHTML = document.getElementById("c" + al).innerHTML*2;
		 setMessage(score);
		score = score + parseInt(document.getElementById("c" + al).innerHTML);
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + cl).innerHTML = "_";
		document.getElementById("c" + dl).innerHTML = "_";

		//cells bl and dl can be combined if cl is blank zx_x
	} if (getCell(bl) == getCell(dl) && getCell(cl) == "_" && getCell(bl) != "_") {
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + bl).innerHTML*2;
		 setMessage(score);
		score = score + parseInt(document.getElementById("c" + bl).innerHTML);
		document.getElementById("c" + cl).innerHTML = "_";
		document.getElementById("c" + dl).innerHTML = "_";

		//cells al and dl can be combined in bl and cl are blank x _ _ x
	}if (getCell(al) == getCell(dl) && getCell(bl) == getCell(cl) && getCell(bl) =="_" && getCell(al) != "_") {
		document.getElementById("c" + al).innerHTML = document.getElementById("c" + al).innerHTML*2;
		 setMessage(score);
		score = score + parseInt(document.getElementById("c" + al).innerHTML);
		document.getElementById("c" + bl).innerHTML = "_";
		document.getElementById("c" + cl).innerHTML = "_";
		document.getElementById("c" + dl).innerHTML = "_";

		//shifts everything over if there are blank spaces
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
}
}

//sliding functions for rows, the for loop makes it apply across multiple rows
function slideLRAll(aa, ba, ca, da) {
	for (var j = 0; j <= 4; j++) {
	slide(aa+ j*4, ba+j*4, ca+j*4, da+j*4);
}
}

//sliding functions for columns, the for loop makes it apply across multiple columns
function slideUDAll(au, bu, cu, du) {
	for (var k = 0; k <=4; k++) {
	slide(au+ k, bu+k, cu+k, du+k);
} 
}

//calls sliding functions depending on the directional buttons
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

        default: return;
    }
    e.preventDefault(); //prevents default action
});
