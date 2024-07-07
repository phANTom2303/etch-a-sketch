let screen = document.querySelector(".screen");


function renderScren() {

    for (let j = 1; j <= 100; j++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let i = 1; i <= 100; i++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseover", changeColour);
            row.appendChild(cell);
        }
        
        screen.appendChild(row);
    }
}


function changeColour(event) {

    event.target.setAttribute("style", "background-color:black;");
    console.log("flag");

}



renderScren();