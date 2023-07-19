let colors = ['pink', 'green', 'red', 'blue', 'yellow', 'orange'];
let currentColorIndex = 0;

// Create 36 hexagonal tiles
for (let i = 0; i < 6; i++) {
    let row = document.createElement('div');
    row.className = 'hexagon-row';
    document.querySelector('.grid').appendChild(row);
    for (let j = 0; j < 6; j++) {
        let hexagon = document.createElement('div');
        hexagon.className = 'hexagon';
        hexagon.onclick = changeColor;
        row.appendChild(hexagon);
    }
}

function changeColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    let newColor = colors[currentColorIndex];
    this.style.backgroundColor = newColor;
    this.style.borderColor = newColor;
}
