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


function slideCells(a, b, c, d) {
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
 	
 	var move = false;
	for (var i=0; i<cells.length; i++)  {
		if(cells[i] == cells[i+1]) {
			cells[i] = cells[i]*2;
			score = score + cells[i]
			setMessage(score);
			cells.splice(i+1, 1);
			move = true;
		}

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

} return cells;
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
        slideHorizontal(1, 2, 3, 4);

        case 38: // up
        slideVertical(1, 5, 9, 13);

        case 39: // right
        slideHorizontal(4, 3, 2, 1);

        case 40: // down
        slideVertical(13, 9, 5, 1);

        default: return;
    }
    e.preventDefault(); //prevents default action
});
