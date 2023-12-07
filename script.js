const container = document.querySelector(".grid-container");

for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        const createGrid = document.createElement("div");
        createGrid.setAttribute("class", "grid");
        
        container.appendChild(createGrid);
    }
};

const grids = document.querySelectorAll(".grid");

Object.values(grids).forEach(grid => {
    grid.addEventListener("mouseenter", (event) => {
        event.target.setAttribute("style", "background-color: black");
    });
})