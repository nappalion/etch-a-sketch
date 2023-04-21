const screen = document.querySelector(".screen")
const container = document.querySelector(".container");
const gridSizeButton = document.querySelector(".grid-button");

gridSizeButton.onclick = () => {
    const size = parseInt(prompt("Please enter the number of rows and columns (max 100): "));
    if (size && size <= 100) {
        createGrid(size, size)
    }
}

function changeColor(square) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    square.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
}

function createGrid(row, col) {
    container.innerHTML = '';
    for (let i = 0; i < row; i++) {
        const row = document.createElement("div");
        row.className = "row";
    
        for (let j = 0; j < col; j++) {
            const square = document.createElement("div");
            square.className = "square";
    
            square.addEventListener('mouseenter', (event) => {
                if (event.buttons === 1) {
                    changeColor(square);
                }
            })

                
            square.addEventListener('mousedown', () => {
                square.style.backgroundColor = "red"
            })
            
            row.appendChild(square);
        }
    
        container.appendChild(row);
    }
}

createGrid(10, 10);


