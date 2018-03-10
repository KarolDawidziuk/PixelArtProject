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
 function clearGrid()
{
	elements.pixelCanvas.innerHTML = "";
}

//Make Grid
 function makeGrid(){
  	//protected the form from submitting non-exist data and page is not refresh
  	event.preventDefault();
	//clearCanvas();

	let grid;
  	const gridSize = getGridSize();

  	//Making grid loop
  	for(let row = 0; row < gridSize.numRows; row++){
  		grid += "<tr>";
  		for(let col = 0; col < gridSize.numCols; col++){
  			grid += "<td></td>";
  		}
  		grid += "</td>";
  	}
 }

//button Event
const events = function() {
	document.getElementById('sizePicker').addEventListener('submit', makeGrid);
	elements.pixelCanvas.addEventListener('click', setGridColor);
}
events();