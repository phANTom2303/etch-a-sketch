let screen = document.querySelector(".screen");


function renderScren() {

    for (let i = 1; i <= 60; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let i = 1; i <= 100; i++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }

        row.addEventListener("mouseover", changeColour);
        row.addEventListener("mouseleave", changeColour);
        screen.appendChild(row);
    }
}

function changeColour(event) {
    if (event.target.classList.contains("cell")) {
        event.target.backgroundColour = "black";
        console.log("flag");
    }
}



renderScren();