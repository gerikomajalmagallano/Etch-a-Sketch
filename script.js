const container = document.querySelector("#container");
const resizeButton = document.querySelector("#resizeButton");


function createGrid(size) {

    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {

        const square = document.createElement("div");

        square.classList.add("square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        container.appendChild(square);

        square.addEventListener("mouseenter", function () {
            square.addEventListener("mouseenter", function () {

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
        });
    }
}


resizeButton.addEventListener("click", function () {

    const newSize = prompt("Enter the number of squares per side:");

    if (newSize >= 1 && newSize <= 100) {

        container.innerHTML = "";

        createGrid(newSize);
    }
});


createGrid(16);