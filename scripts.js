// GLOBALS
let GRID_NUMBER = 16; // this number means it will make a NUM x NUM grid of squares


function makeGrid(numberOfDivs) 
{

    const wholeDiv = document.querySelector('.wholePage');

    wholeDiv.style.setProperty('--column-number', GRID_NUMBER);

    for(let i = 0; i < numberOfDivs*numberOfDivs; i++)
    {
        let div = document.createElement('div');

        div.textContent = "#";

        wholeDiv.appendChild(div);
    }
}



makeGrid(GRID_NUMBER);