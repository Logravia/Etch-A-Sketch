const canvas = document.querySelector('.canvas');
const buttons = document.querySelectorAll('button');
const pixelTheme = "red";

const populateCanvas = (rows, columns) => {
    // make rows for pixels to be in
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('div');
        row.setAttribute("class", "row");

        //make pixels in each row
        for (let j = 0; j < columns; j++) {
            let pixel = document.createElement('div');
            pixel.setAttribute("class", "pixel");

            // color pixel when mouse enters it with the defined theme
        pixel.addEventListener("mouseenter",colorPixel);
            row.appendChild(pixel);
        }
        canvas.appendChild(row);
    }
}

const colorPixel = (e) => {
    e.target.setAttribute("style", `background-color : ${rgbGenerator()}`);
}

const changePixelTheme = (e) => {
    pixelTheme = e.currentTarget.id
}

const getRandInt = (max) => {
    return Math.floor(Math.random() * max); 
}

const rgbGenerator = (limitR ='256', limitG='256', limitB='256') => {
    return `rgb(${getRandInt(limitR)},${getRandInt(limitG)},${getRandInt(limitB)})`
}

buttons.forEach(button => button.addEventListener("click", changePixelTheme, false))
        
populateCanvas(16,16);