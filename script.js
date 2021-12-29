const canvas = document.querySelector('.canvas')

const populateCanvas = (rows, columns) => {
    // make rows for pixels to be in
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('div');
        row.setAttribute("class", "row");

        //make pixels in each row
        for (let j = 0; j < columns; j++) {
            let pixel = document.createElement('div');
            pixel.setAttribute("class", "pixel");

            // color pixel when mouse enters it
            pixel.addEventListener("mouseenter",colorPixel);
            row.appendChild(pixel);
        }
        canvas.appendChild(row);
    }
}

const colorPixel = (e, color="black") => {
    e.target.setAttribute("style", `background-color : ${color}`);
}

populateCanvas(4,4);