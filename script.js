
const GRID_WIDTH = 600;

function createCell(size) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${GRID_WIDTH / size}px`
    cell.style.height = `${GRID_WIDTH / size}px`
    return cell;
}

function fillGrid(size = 16) {
    const grid = document.querySelector(".grid");
    for (let i = 0; i < size * size; i++) {
        grid.appendChild(createCell(size));
    }
}

fillGrid();