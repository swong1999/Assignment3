let numRows = 0;
let numCols = 0;
let colorSelected; 
let table = document.getElementById("grid");

//Add a row
function addR() {
    //alert("Clicked Add Row");
	let table = document.getElementById("grid");
	//ifemptytablefromstart
	if (numCols == 0 && numRows == 0){
		var row = table.insertRow(0);
		var cells = row.insertCell(0);
		numRows=1;
		numCols=1;
		cells.innerHTML = numRows + " " + numCols;
	}
	//ifrowwasdeletedwithlefovercolumns
	else if (numCols > 0 && numRows < 1){
		var row = table.insertRow(0);
		var cells = row.insertCell(0);
		numRows=1;
		numCols=1;
		cells.innerHTML = numRows + " " + numCols;
	}
	//ifcolwasdeletedwithlefoverrows
	else if (numCols < 1){
		var row = table.insertRow(0);
		var cells = row.insertCell(0);
		numRows=numRows+1;
		numCols=numCols+1;
		cells.innerHTML = numRows + " " + numCols;
	}
	//ifmorethan1cell
	else if (numCols > 0 && numRows > 0){
		var rowlength = document.getElementById("grid").rows[0].cells.length;
		var newrow = table.insertRow(0);
		numRows=numRows+1;
		for(var x=0; x<rowlength; x++){
			var cells = newrow.insertCell(x);
			cells.innerHTML = numRows + " " + numCols;
		}
	}
}
//Add a column
function addC() {
    //alert("Clicked Add Col");
	let table = document.getElementById("grid");
	//ifemptytablefromstart
	if (table.rows.length == 0){
		var row = table.insertRow(0);
		var cells = row.insertCell(0);
		numRows=1;
		numCols=1;
		cells.innerHTML = numRows + " " + numCols;
	}
	//ifatleast1cell
	else {
		var numrows = document.getElementById("grid").rows.length;
		var rowlength = document.getElementById("grid").rows[0].cells.length;
		for(var x=0; x<numrows; x++){
			var cells = table.rows[x].insertCell(rowlength);
		}
		numCols=numCols+1;
		cells.innerHTML = numRows + " " + numCols;
	}
}

//Remove a row
function removeR() {
    //alert("Clicked Remove Row")
	//whentherearemorethan1row
	if(numRows > 1){
		let table = document.getElementById("grid");
		let row = table.deleteRow(0);
		numRows=numRows-1;
	}
	//whenthereis1rowleft
	else if(numRows == 1){
		let table = document.getElementById("grid");
		let row = table.deleteRow(0);
		numRows = 0;
		numCols = 0;
	}
}
//Remove a column
function removeC() {
    //alert("Clicked Remove Col")
	let table = document.getElementById("grid");
	//ifthereismultiplecolsandrows
	if(numRows > 1 && numCols > 1){
		var numrows = document.getElementById("grid").rows.length;
		var rowlength = document.getElementById("grid").rows[0].cells.length;
		for(var r=0; r<numrows; r++){
			table.rows[r].deleteCell(-1);
		}
		numCols=numCols-1;
	}
	//ifthereis1colwith1row
	else if(numCols == 1 && numRows == 1){
		var numrows = document.getElementById("grid").rows.length;
		var rowlength = document.getElementById("grid").rows[0].cells.length;
		for(var r=0; r<numrows; r++){
			table.deleteRow(r);
			numRows = numRows-1;
		}
		numCols = 0;
	}
	//ifthereis1rowwithmultiplecol
	else if(numCols > 1 && numRows == 1){
		var numrows = document.getElementById("grid").rows.length;
		var rowlength = document.getElementById("grid").rows[0].cells.length;
		for(var r=0; r<numrows; r++){
			table.rows[r].deleteCell(rowlength-1);
		}
		numCols = numCols-1;
	}
	//ifthereis1colwithmultiplerows
	else if (numRows > 1 && numCols == 1){
		var numrows = document.getElementById("grid").rows.length;
		var rowlength = document.getElementById("grid").rows[0].cells.length;
		for(var r=0; r<numrows; r++){
			table.deleteRow(0);
			numRows = numRows-1;
		}
		numCols = 0;
	}
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    return colorSelected;
}
//grabs all elements and changes it to the selected color
function fill(){
	table.querySelectorAll('td').forEach(td => td.style.backgroundColor = selected());
}

//grabs all elements in and changes the color to white
function clearAll(){
	table.querySelectorAll('td').forEach(td => td.style.backgroundColor = 'white');
}

function fillU() {
    let row = document.getElementsByTagName("td");
    for (let i = 0; i < row.length; i++) {
        let cells = row[i].style;
        let bg = cells.backgroundColor;
        if (bg === "") { 
            document.querySelectorAll("td")[i].style.backgroundColor = colorSelected;
        }
     }
  }

function fillClick(event){
	if(event.target.nodeName.toLowerCase() === 'td'){
		event.target.style.backgroundColor = selected();
	}
}
table.addEventListener("click", fillClick);
