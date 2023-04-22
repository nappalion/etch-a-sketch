const screen = document.querySelector(".screen");
const grid = document.querySelector(".grid");
const gridSizeSlider = document.getElementById("grid-slider");
const gridLabel = document.getElementById("grid-label");
const clearButton = document.getElementById("clear-button");
const colorPicker = document.getElementById("color");
const eraserCheckbox = document.getElementById("eraser");
const rainbowCheckbox = document.getElementById("rainbow");
let color = colorPicker.value;
let size = 50;
let isEraser = false;
let isRainbow = false;

gridSizeSlider.addEventListener("input", function() {
    size = parseInt(gridSizeSlider.value);
    gridLabel.textContent = gridSizeSlider.value + " x " + gridSizeSlider.value;
    if (size && size <= 100) {
        createGrid(size, size);
    }
})

colorPicker.addEventListener("input", function() {
    color = colorPicker.value;
})

clearButton.addEventListener("click", function() {
    createGrid(size, size)
})

eraserCheckbox.addEventListener("change", function() {
    isEraser = this.checked;
})

rainbowCheckbox.addEventListener("change", function() {
    isRainbow = this.checked;
})

function randomColor(square) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    square.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
}

function draw(square) {
    if (isEraser) {
        square.style.backgroundColor = "transparent";
    } else if (isRainbow) {
        randomColor(square);
    } else {
        square.style.backgroundColor = color;
    }
}

function createGrid(row, col) {
    grid.innerHTML = '';
    for (let i = 0; i < row; i++) {
        const row = document.createElement("div");
        row.className = "row";
    
        for (let j = 0; j < col; j++) {
            const square = document.createElement("div");
            square.className = "square";
    
            square.addEventListener('mouseenter', (event) => {
                if (event.buttons === 1) {
                    draw(square);
                }
            })

                
            square.addEventListener('mousedown', () => {
                draw(square);
            })
            
            row.appendChild(square);
        }
    
        grid.appendChild(row);
    }
}

createGrid(size, size);


