
const GRID_WIDTH = 600;

function createCell(size) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${GRID_WIDTH / size}px`
    cell.style.height = `${GRID_WIDTH / size}px`
    cell.addEventListener('mouseenter', handleCellHover)
    return cell;
}

function cleanGrid() {
    const grid = document.querySelector(".grid");
    grid.replaceChildren();
}

function fillGrid(size = 16) {
    const grid = document.querySelector(".grid");
    for (let i = 0; i < size * size; i++) {
        grid.appendChild(createCell(size));
    }
}

function handleCellHover(event) {
    event.target.style.backgroundColor = "black"
}

function handleResize() {
    const resizeButton = document.querySelector(".resize");
    resizeButton.addEventListener('click', () => {
        let newSize = "";
        do {
            newSize = prompt("Input a new dimension for the grid (min 16, max 100): ");
        } while (!validateSize(newSize));
        cleanGrid();
        fillGrid(newSize);
    });
}

function validateSize(size) {
    if (isNaN(size)) {
        return false;
    }
    const sizeNumber = Number(size);
    return sizeNumber >= 16 && sizeNumber <= 100;
}

fillGrid();
handleResize();