const pixelBoard = document.querySelector('.pixel-board');
const resetButton = document.querySelector('#reset-button');

const pixelBoardSize = 960;
let isMouseDown = false;
let shade;

resetButton.addEventListener('click', resetPixelBoard)
document.body.onmousedown = () => {isMouseDown = true;};
document.body.onmouseup = () => {isMouseDown = false;};
//document.body.ondrag = () => {isMouseDown = false; return;};
pixelBoard.addEventListener("dragstart",(event)=>{
    event.preventDefault();
  })

createPixelBoard(16);

function resetPixelBoard(){
    let resolution = prompt("Choose pixel density. (Up to 100)");
    if (isNaN(resolution) || resolution < 1 || resolution > 100){
        alert("Please enter a whole, positive number between 1 and 100.");
        return;
    }
    createPixelBoard(resolution);
}

function createPixelBoard(resolution){
    let pixelRow;

    pixelBoard.innerHTML = "";

    for(let i = 0; i < resolution; i++){
        pixelRow = document.createElement('div');
        pixelRow.classList.add('pixel-row');
        pixelBoard.appendChild(pixelRow);

        for(let j = 0; j < resolution; j++){
            createPixel(Math.floor(pixelBoardSize/resolution));
        }
    }

    function createPixel(size){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.setAttribute('data-shade', '0');

        pixel.addEventListener('mousedown', () => {
            changeColor();
        }); 
        pixel.addEventListener('mouseover', () => {
            if(isMouseDown){
                changeColor();
            }
        });
        pixelRow.appendChild(pixel);

        function changeColor(){
            shade = pixel.getAttribute('data-shade');
            if(shade < 10){
                shade++;
                pixel.setAttribute('data-shade', shade);
            }
            pixel.style.backgroundColor = `rgb(${255-shade*25},${255-shade*25},${255-shade*25})`;
        }
    }
}