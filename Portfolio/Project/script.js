/*

function init() {
    init = function() {}

    var output = document.getElementById("output");
    for (let rowTick = 0; rowTick < 9; rowTick++) {
        var group = document.createElement("div");
        group.classList.add("group");
        group.id = rowTick + 1;
        output.appendChild(group);
        
        for (let columnTick = 0; columnTick < 9; columnTick++) {
            var grid = document.createElement("input");
                grid.type = "text";
                grid.classList.add("grid");
                grid.classList.add(rowTick + 1);
                grid.id = (columnTick + 1);
            group.appendChild(grid);

        }

    }

}




function init() {
    init = function() {}

    var table = [];

    var output = document.getElementById("output");
    for (let rows = 0; rows < 9; rows++) {
        for (let columns = 0; columns < 9; columns++) {
            var grid = document.createElement("input");
                grid.type = "text";
                grid.classList.add("grid");
                grid.classList.add(rows + 1);
                grid.id = (columns + 1);  
            output.appendChild(grid);
            table.push((rows + 1) + " " + (columns + 1));
        } 
    }

    console.table(table);

}


*/


function init() {
    init = function() {}

    //create arrays for grid

    var rows = [];
    var columns = [];

    //custom array for group

    var groups = [
        1, 1, 1, 2, 2, 2, 3, 3, 3,
        1, 1, 1, 2, 2, 2, 3, 3, 3,
        1, 1, 1, 2, 2, 2, 3, 3, 3,
        4, 4, 4, 5, 5, 5, 6, 6, 6,
        4, 4, 4, 5, 5, 5, 6, 6, 6,
        4, 4, 4, 5, 5, 5, 6, 6, 6,
        7, 7, 7, 8, 8, 8, 9, 9, 9, 
        7, 7, 7, 8, 8, 8, 9, 9, 9, 
        7, 7, 7, 8, 8, 8, 9, 9, 9
    ]; 
    var output = document.getElementById("output");

    //create 81 divs, attach ids for rows and columns

    for (let a = 0; a < 9; a++) {
        for (let b = 0; b < 9; b++) {
            rows.push(a + 1);
            columns.push(b + 1);
            var grid = document.createElement("input");
                grid.type = "text";
                grid.classList.add("grid");
                grid.classList.add("r" + (a + 1));
                grid.classList.add("c" + (b + 1));
            output.appendChild(grid);
        }
    }

    //attach ids for groups 

    let c = 0;
    while (c < groups.length) {
        var gridIndex = output.childNodes[c];
        gridIndex.classList.add("g" + (groups[c]));
        generateNumbers(gridIndex);
        c++;
    }

    //generate puzzle

    function generateNumbers(gridIndex) {
        var random = Math.floor(Math.random() * 10);
        for (let d = 0; d < 9; d++) {
            var rowIndex = output.getElementsByClassName("r" + [d + 1]);
            var colIndex = output.getElementsByClassName("c" + [d + 1]);
            var groupIndex = output.getElementsByClassName("g" + [d + 1]);
            for (let e = 0; e < rowIndex.length; e++) {
               
            }
        }
    }
}
