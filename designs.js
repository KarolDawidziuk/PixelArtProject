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
	clearGrid();

  	const gridSize = getGridSize();

  	//Making grid loop
  	for(let row = 0; row < gridSize.numRows; row++){
  		let canvasRow = elements.pixelCanvas.innerHTML = "<tr>";
  		for(let col = 0; col < gridSize.numCols; col++){
  			let canvasCol = elements.pixelCanvas.innerHTML = "<td><td>";
  		}
  		 canvasRow = elements.pixelCanvas.innerHTML = "</tr>"
  	}
 }

//button Event
const events = function() {
	document.getElementById('sizePicker').addEventListener('submit', makeGrid, false);
	elements.pixelCanvas.addEventListener('click', setGridColor);
};
events();