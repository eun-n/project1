# project1
This is a game based off of the popular 2048 game by Gabriele Cirulli. 
This was created using HTML, CSS, jQuery and Javascript in the Sublime text editor. 

The game works by first randomly generating two tiles. Each randomly generated tile has a value of either 2 or 4. 
The player slides tiles across the board using the arrow keys. Tiles will move only if they can be combined with another tile of the same value, or if there is a blank tile next to it.


In order to combine like tiles, the gameboard values were converted into an array, then run through a for loop, and then re-inserted into the gameboard.

In order to check to see if a valid move was made, a string was created from the current state of the board, and another string was created after an arrow key was pressed. Then once the key is released, a function would be called that compared the two strings. If they are exactly the same, then no move was made. If a move was made, a new tile would be inserted into an empty tile on the gameboard. 

Win condition: A player wins once they create a tile with the value of 2048.