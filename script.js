const container = document.querySelector(".grid-container");
const restartButton = document.querySelector(".restart");

let gridSize = 16;

function createGrid(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        for(let j = 0; j < gridSize; j++) {
            const gridSquare = document.createElement("div");

            gridSquare.setAttribute("class", "grid");
            gridSquare.setAttribute("style", `width: calc(100% * (1/${gridSize}))`)

            container.appendChild(gridSquare);
        };
    };
    let grids = document.querySelectorAll(".grid");

    Object.values(grids).forEach(grid => {
        grid.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "black";
        });
    })
}

restartButton.addEventListener("click", () => {
    do {
        gridSize = prompt("Enter grid size (max 100)!");
    } while(gridSize > 100);

   while(container.firstChild) {
       container.removeChild(container.lastChild);
   };

   createGrid(gridSize);
});

createGrid(gridSize);