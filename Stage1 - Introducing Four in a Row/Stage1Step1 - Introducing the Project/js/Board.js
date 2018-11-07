
class Board {
    constructor() {
        this.row = 6;
        this.column = 7;
        this.space = this.createSpaces();
        /** 
 * Generates 2D array of spaces. 
 * @return  {Array}     An array of space objects
 */
        createSpaces() {
            const spaces = [];
            for (let x = 0; x < this.column; x++) { //iterates through the number of columns 
                const column = []; //Holds the individual space objects in column

            for (let y = 0; y < this.row; y++) { //Fills the spaces in each column 
                const space = new Space(x,y);       //spaces-array is a two dimensional array
                column.push(space);                 //Pushes spaces to column array
            }
                spaces.push(column);                //Pushes columns with space to the spaces array

            }
                return spaces;
        }
    }
}