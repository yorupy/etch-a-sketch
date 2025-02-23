
const GRID_WIDTH = 600;
let alpha = 0.1;

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
    alpha = 0.1;
    grid.replaceChildren();
}

function fillGrid(size = 16) {
    const grid = document.querySelector(".grid");
    for (let i = 0; i < size * size; i++) {
        grid.appendChild(createCell(size));
    }
}

function handleCellHover(event) {
    event.target.style.backgroundColor = createRGBAColor(generateRandomRGB(), alpha);
    if (alpha < 1) {
        alpha += 0.1;
    }
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

function generateRandomRGB() {
    const rgb = [];
    for (let i = 0; i < 3; i++) {
        const randomByte = Math.floor(Math.random() * 256);
        rgb.push(randomByte);
    }
    return rgb;
}

function createRGBColor(rgb) {
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

function createRGBAColor(rgb, alpha) {
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
}

fillGrid();
handleResize();