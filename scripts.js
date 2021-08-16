// GLOBALS
const GRID_NUMBER = 32; // this number means it will make a NUM x NUM grid of squares


function makeGrid(numberOfDivs) 
{
    const wholeDiv = document.querySelector('.gridWrapper');

    wholeDiv.style.setProperty('--column-number', GRID_NUMBER);

    for(let i = 0; i < numberOfDivs*numberOfDivs; i++)
    {
        let div = document.createElement('div');

        div.setAttribute("class","gridBox");

        wholeDiv.appendChild(div);
    }
}

function draw() 
{
    const boxNodes = document.querySelectorAll('.gridBox'); // Need to convert to array which is what Array.from() does

    const boxArray = Array.from(boxNodes);

    boxArray.forEach(box => {
                box.addEventListener("mouseover", function(e){
                box.style.backgroundColor = "red";
            }
        );
    });
}


makeGrid(GRID_NUMBER);
draw();