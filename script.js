const canvas = document.querySelector('.canvas');
const buttons = document.querySelectorAll('.theme-btn');

let canvasSize = {'rows': 16, 'columns': 16};
let pixelTheme = 'autumn';

const hslThemeSet = {
                    'rainbow' : {'minH': 0, 'maxH': 360, 'minS': 50, 'maxS': 100, 'minL': 30, 'maxL' : 90}, 
                    'purple': {'minH': 270, 'maxH': 310, 'minS': 20, 'maxS': 90, 'minL': 30, 'maxL' : 55},
                    'pink': {'minH': 298, 'maxH': 305, 'minS': 80, 'maxS': 100, 'minL': 50, 'maxL' : 100},
                    'volcano': {'minH': 345, 'maxH': 360, 'minS': 70, 'maxS': 90, 'minL': 15, 'maxL' : 50},
                    'winter': {'minH': 190, 'maxH': 230, 'minS': 50, 'maxS': 90, 'minL': 40, 'maxL' : 100},
                    'spring': {'minH': 100, 'maxH': 130, 'minS': 65, 'maxS': 95, 'minL': 40, 'maxL' : 85},
                    'summer': {'minH': 85, 'maxH': 130, 'minS': 85, 'maxS': 100, 'minL': 15, 'maxL' : 40},
                    'autumn': {'minH': 20, 'maxH': 100, 'minS': 85, 'maxS': 100, 'minL': 10, 'maxL' : 35},
                    'grey': {'minH': 35, 'maxH': 40, 'minS': 0, 'maxS': 10, 'minL': 55, 'maxL' : 75},
                    'darkazure': {'minH': 230, 'maxH': 240, 'minS': 0, 'maxS': 100, 'minL': 10, 'maxL' : 25},
                    'darkblue': {'minH': 230, 'maxH': 240, 'minS': 15, 'maxS': 60, 'minL': 10, 'maxL' : 15},
                 };

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

// changes pixel theme based on the clicked button
const changePixelTheme = (e) => {
    pixelTheme = e.currentTarget.id
}

// min inclusive, max non-inclusive
const getRandInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
const HslGenerator = (hslLim) => {
    return `hsl(${getRandInt(hslLim.minH, hslLim.maxH)}, ${getRandInt(hslLim.minS, hslLim.maxS)}%, ${getRandInt(hslLim.minL, hslLim.maxL)}%)`
}

const clearCanvas = () => {
    pixels.forEach(pixel => pixel.setAttribute('style', 'background-color: '))
}

buttons.forEach(button => button.addEventListener('click', changePixelTheme, false));

document.querySelector('#clear').addEventListener('click', clearCanvas);


populateCanvas(canvasSize.rows, canvasSize.columns);
const pixels = document.querySelectorAll('.pixel');
