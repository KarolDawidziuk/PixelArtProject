//Elements
const elements = {
	colorPicker: document.getElementById('colorPicker'),
	pixelCanvas: document.getElementById('pixelCanvas'),
	inputWeight: document.getElementById('inputWeight'),
	inputHeight: document.getElementById('inputHeight')
};

//Sets Grid Color
function setGridColor(event){
	let color = elements.colorPicker.value;
	event.target.setAttribute('style', 'background-color: ' + color);
}

//Get Grid Size
 function getGridSize()
 {
 	let numRows = elements.inputHeight.value;
 	let numCols = elements.inputWeight.value;

 	return{
 		numRows: parseInt(numRows),
 		numCols: parseInt(numCols)

 	}
 }

 //Clear grid
 function clearGrid(){
	elements.pixelCanvas.innerHTML = "";
 }

//Make Grid
 function makeGrid(){
  	//protected the form from submitting non-exist data and page is not refresh
  	event.preventDefault();
	clearGrid();

  	const gridSize = getGridSize();

  	//Making grid loop
  	for(let row = 0; row < gridSize.numRows; row++){
  		let rows = elements.pixelCanvas.insertRow(row);

  		for(let col = 0; col < gridSize.numCols; col++){
  			rows.insertCell(col);
  		}
  	}
 }

//button Event
const events = function() {
	document.getElementById('sizePicker').addEventListener('submit', makeGrid);
	elements.pixelCanvas.addEventListener('click', setGridColor);
};
events();
