function renderScren() {
    let screen = document.querySelector(".screen");
    for (let i = 1; i <= 6000; i++) {
        let cell = document.createElement("div");
        let name = "cell" + i;
        cell.classList.add(name);
        cell.classList.add("cell");
        screen.appendChild(cell);
    }
}

// renderScren();