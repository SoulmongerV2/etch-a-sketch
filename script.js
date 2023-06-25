const pixelBoard = document.querySelector('.pixel-board');
const resetButton = document.querySelector('#reset-button');

const pixelBoardSize = 960;
let isMouseDown = false;

resetButton.addEventListener('click', resetPixelBoard)
document.body.onmousedown = () => {isMouseDown = true;};
document.body.onmouseup = () => {isMouseDown = false;};

createPixelBoard(30);

function resetPixelBoard(){
    let resolution = prompt("Choose board size.");
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
        pixel.setAttribute('draggable', 'false');
        pixel.addEventListener('mousedown', () => {
            pixel.style.backgroundColor = "black";
        }); 
        pixel.addEventListener('mouseover', () => {
            if(isMouseDown)
            pixel.style.backgroundColor = "black";
        });
        pixelRow.appendChild(pixel);
    }
}