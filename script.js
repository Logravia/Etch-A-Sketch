const canvas = document.querySelector('.canvas')


const populateCanvas = (rows, columns) => {

    for (let i = 0; i < rows; i++) {
        let row = document.createElement('div');
        row.setAttribute("class", "row");

        for (let j = 0; j < columns; j++) {
            let pixel = document.createElement('div');
            pixel.setAttribute("class", "pixel");
            row.appendChild(pixel);
        }
        canvas.appendChild(row);
    }
}

populateCanvas(8,8);