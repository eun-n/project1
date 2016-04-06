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


// new tile distribution: 2: 90%, 4: 10%//
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
	var emptyCells = [];
	for (var s=1; s<17; s++) {
		var cell = document.getElementById("c" + s);
		if (cell.innerHTML === "_")  {
			emptyCells.push(cell)
			document.getElementById("c" + s).innerHTML = newNumber();
			s=s+16;
		}
	}

	var index = Math.floor(Math.random() * cells.length);
	var choice = emptyCells[index];
	choice.innerHTML = 

}

//function for sliding rules for cells when there are duplicates or blank cells
// did not use "else if" statements as multiple lines will need to execute simultaneously
function slide(al, bl, cl, dl) {

	var numOfCalcs = 0;

	//cells al and bl can be combined x x _ _
	if(getCell(al) == getCell(bl) && getCell(al) != "_" && numOfCalcs < 2) {
		document.getElementById("c" + al).innerHTML = document.getElementById("c" + al).innerHTML*2;
		score = score + parseInt(document.getElementById("c" + al).innerHTML);
		 setMessage(score);
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + cl).innerHTML;
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";
		numOfCalcs++

		aCacled = true;
	}

	if (getCell(al) == getCell(cl) && getCell(bl) == "_" && getCell(al) != "_" && numOfCalcs < 2) {
		document.getElementById("c" + al).innerHTML = document.getElementById("c" + al).innerHTML*2;
		 setMessage(score);
		score = score + parseInt(document.getElementById("c" + al).innerHTML);
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + cl).innerHTML = "_";
		document.getElementById("c" + dl).innerHTML = "_";
		numOfCalcs++

		//cells bl and cl can be combined z x x _
	}

	if(getCell(bl) == getCell(cl) && getCell(bl) != "_" && numOfCalcs < 2) {
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + bl).innerHTML*2;
		 setMessage(score);
		score = score + parseInt(document.getElementById("c" + bl).innerHTML);
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";
		numOfCalcs++

		//cells cl and dl can be combined z c x x
	}

	if(getCell(cl) == getCell(dl) && getCell(cl) != "_" && numOfCalcs < 2) {
		console.log('c and d equal');
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + cl).innerHTML*2;
		 setMessage(score);
		score = score + parseInt(document.getElementById("c" + cl).innerHTML);
		document.getElementById("c" + dl).innerHTML = "_";
		numOfCalcs++

		//cells al and cl can be combined if bl is blank x _ x z
	}  

	if (getCell(bl) == getCell(dl) && getCell(cl) == "_" && getCell(bl) != "_" && numOfCalcs < 2 ) {
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + bl).innerHTML*2;
		 setMessage(score);
		score = score + parseInt(document.getElementById("c" + bl).innerHTML);
		document.getElementById("c" + cl).innerHTML = "_";
		document.getElementById("c" + dl).innerHTML = "_";
		numOfCalcs++

		//cells al and dl can be combined in bl and cl are blank x _ _ x
	}

	if (getCell(al) == getCell(dl) && getCell(bl) == getCell(cl) && getCell(bl) =="_" && getCell(al) != "_" && numOfCalcs < 2) {
		document.getElementById("c" + al).innerHTML = document.getElementById("c" + al).innerHTML*2;
		 setMessage(score);
		score = score + parseInt(document.getElementById("c" + al).innerHTML);
		document.getElementById("c" + bl).innerHTML = "_";
		document.getElementById("c" + cl).innerHTML = "_";
		document.getElementById("c" + dl).innerHTML = "_";
		numOfCalcs++

		//shifts everything over if there are blank spaces
		//used a for loop to make sure they shifted over completely for consecutive blank spaces
	} 

	for (var i = 0; i<=1; i++) {
		
		if (document.getElementById("c" + al).innerHTML == "_") {
		document.getElementById("c" + al).innerHTML = document.getElementById("c" + bl).innerHTML;
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + cl).innerHTML;
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";
		} 

		if (document.getElementById("c" + bl).innerHTML == "_") {
		document.getElementById("c" + bl).innerHTML = document.getElementById("c" + cl).innerHTML;
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";
		} 

		if (document.getElementById("c" + cl).innerHTML == "_") {
		document.getElementById("c" + cl).innerHTML = document.getElementById("c" + dl).innerHTML;
		document.getElementById("c" + dl).innerHTML = "_";
	}
}
}

function getCells(a, b, c, d) {
  var cells = [
  	getCell(a),
  	getCell(b),
  	getCell(c),
  	getCell(d),
  ]

  cells = cells.filter(function(cell) {
  	return cell != "_";
  }).map(function(cell) {
    return parseInt(cell, 10);
  })

  return cells;
}

//sliding functions for rows, the for loop applies it across multiple rows
function slideLRAll(aa, ba, ca, da) {
	for (var j = 0; j <= 4; j++) {

		var cells = getCells(aa+ j*4, ba+j*4, ca+j*4, da+j*4);
		console.log(cells);

		slide(aa+ j*4, ba+j*4, ca+j*4, da+j*4);
	}
}

//sliding functions for columns, the for loop applies it across multiple columns
function slideUDAll(az, bz, cz, dz) {
	for (var k = 0; k <=4; k++) {
	slide(az+ k, bz+k, cz+k, dz+k);
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
