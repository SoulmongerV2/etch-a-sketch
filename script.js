let pixelBoard = document.querySelector('.pixel-board');
const pixelBoardSize = 960;
let isMouseDown = false;

document.body.onmousedown = () => {isMouseDown = true;};
document.body.onmouseup = () => {isMouseDown = false;};

createPixelBoard(10);
//window.addEventListener('DOMContentLoaded', generatePixelBoard(10));
//window.addEventListener('DOMContentLoaded', alert("damn son"));

function createPixelBoard(resolution){
    for(let i = 0; i < resolution; i++){
        for(let j = 0; j < resolution; j++){
            createPixel(Math.floor(pixelBoardSize/resolution));
        }
    }

    function createPixel(size){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.width = size + "px";
        pixel.style.height = size + "px";
        pixel.setAttribute('draggable', 'false');
        pixel.addEventListener('mouseover', () => {
            if(isMouseDown)
            pixel.style.backgroundColor = "black";
        })
        pixelBoard.appendChild(pixel);
    }
}