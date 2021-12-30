const canvas = document.querySelector('.canvas');
const buttons = document.querySelectorAll('button');

let canvasSize = {'rows': 16, 'columns': 16};

const pixelTheme = 'purple';

const hslThemeSet = {'rainbow' : {'minH': 0, 'maxH': 360, 'minS': 0, 'maxS': 100, 'minL': 0, 'maxL' : 100}, 'purple': {'minH': 270, 'maxH': 320, 'minS': 0, 'maxS': 100, 'minL': 0, 'maxL' : 100}, };

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
    e.target.setAttribute("style", `background-color : ${HslGenerator(hslThemeSet[pixelTheme])}`);
}

const changePixelTheme = (e) => {
    pixelTheme = e.currentTarget.id
}

// min inclusive, max non-inclusive
const getRandInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
const HslGenerator = (hslLim) => {
    return `hsl(${getRandInt(hslLim.minH, hslLim.maxH)}, ${getRandInt(hslLim.minS, hslLim.maxS)}%, ${getRandInt(hslLim.minL, hslLim.maxL)}%)`

//    return `rgb(${getRandInt(RGBlim.minR, RGBlim.maxR)},${getRandInt(RGBlim.minG, RGBlim.maxG)},${getRandInt(RGBlim.minB, RGBlim.maxB)})`
}

buttons.forEach(button => button.addEventListener("click", changePixelTheme, false))
        
populateCanvas(canvasSize.rows, canvasSize.columns);