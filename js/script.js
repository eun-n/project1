//function to get a specific cell
function getCell(number) {
	return document.getElementById("c" + number).innerHTML;
}
//score variable, points are added to the score when numbers are combined (combining 2 + 2 will give you 4 points)
var score = 0;
//function to display current score on the page
function setMessage() {
	document.getElementById("message").innerHTML=score;
}
//gets the state of the board before a move in the form of a string
function prevBoard() {
var aboard = [
	getCell(1),
	getCell(2),
	getCell(3),
	getCell(4),
	getCell(5),
	getCell(6),
	getCell(7),
	getCell(8),
	getCell(9),
	getCell(10),
	getCell(11),
	getCell(12),
	getCell(13),
	getCell(14),
	getCell(15),
	getCell(16),
];

astring = aboard.toString();
return astring;
}

//gets the state of the board immediately after a move in the form of a string
function afterBoard() {
	var bboard = [
	getCell(1),
	getCell(2),
	getCell(3),
	getCell(4),
	getCell(5),
	getCell(6),
	getCell(7),
	getCell(8),
	getCell(9),
	getCell(10),
	getCell(11),
	getCell(12),
	getCell(13),
	getCell(14),
	getCell(15),
	getCell(16),
];

	bstring = bboard.toString();
return bstring;
}

//generates a new number with a 90% probability of being 2, and 10% prob of being 4
function newNumber() {
	var num = Math.random();
	if (num < 0.9) {
		return 2;
	} else {
		return 4;
	}
}

//randomly selects an available tile and inserts the number generated from newNumber() 
function newTile() {
	var emptyCells = [];
	for (var x=0; x<1; x++) {
 	for (var s=1; s<17; s++) {
		if (document.getElementById("c" + s).innerHTML === "_")  {
		var cell = document.getElementById("c" + s);
		if (cell.innerHTML === "_")  {
			emptyCells.push(cell)
		}
		}
 	}

	var index = Math.floor(Math.random() * emptyCells.length);
	var choice = emptyCells[index];
	choice.innerHTML = newNumber();
	}
 }
//starts the game by generating 2 random tiles
 function startGame() {
 	for (var i=0; i<2; i++) {
 		newTile();
 	}
 }
//checks to see if any valid moves were made on the board (valid move is detected when the board changes)
//if there was a move, a new tile would be generated
function checkMove() {
	if(astring === bstring) {
		return false;
	} else if (bstring == null) {
		return false;
	} else {
		newTile();
	}
}

//function to slide over cells by creating an array per row/column, and combining numbers if they are adjacent or separated by a blank tile
function slideCells(a, b, c, d) {
	  var cells = [
		  	getCell(a),
		  	getCell(b),
		  	getCell(c),
		  	getCell(d),
		  	]

//removed the "_" cells from the array
  	cells = cells.filter(function(cell) {
  		return cell != "_";
 		 }).map(function(cell) {
    		return parseInt(cell, 10);
  		})
 	//checked for possible number combinations and combined them
	for (var i=0; i<cells.length; i++)  {
		if(cells[i] == cells[i+1]) {
			cells[i] = cells[i]*2;
			score = score + cells[i]
			setMessage(score);
			cells.splice(i+1, 1);
		}
	}
//inserted newly created array back into the html and placed "_" where the array has no value
//flag created issues, currently working on an alternative method
	if (cells[0]) {
		document.getElementById("c" + a).innerHTML = cells[0];
	} else document.getElementById("c" + a).innerHTML =  "_";
	if (cells[1]) {
		document.getElementById("c" + b).innerHTML = cells[1];
	} else document.getElementById("c" + b).innerHTML =  "_";

	if (cells[2]) {
		document.getElementById("c" + c).innerHTML = cells[2];
	} else document.getElementById("c" + c).innerHTML =  "_";

	if (cells[3]) {
		document.getElementById("c" + d).innerHTML = cells[3];
	} else document.getElementById("c" + d).innerHTML =  "_";
 	afterBoard();

}


//slides cells horizontally across multiple rows
function slideHorizontal(aa, ba, ca, da) {
	for (var j = 0; j <= 4; j++) {

		slideCells(aa+ j*4, ba+j*4, ca+j*4, da+j*4);
	}
}

//slides cells vertically across multiple columns
function slideVertical(az, bz, cz, dz) {
	for (var k = 0; k <=4; k++) {
	slideCells(az+ k, bz+k, cz+k, dz+k);
}
}


// //calls sliding functions depending on the directional buttons
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        prevBoard();
        slideHorizontal(1, 2, 3, 4);

        case 38: // up
        prevBoard();
        slideVertical(1, 5, 9, 13);

        case 39: // right
        prevBoard();
        slideHorizontal(4, 3, 2, 1);

        case 40: // down
        prevBoard();
        slideVertical(13, 9, 5, 1);

        default: return;
    }
    e.preventDefault(); //prevents default action
});