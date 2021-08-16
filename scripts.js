// GLOBALS
const GRID_NUMBER = 64; // this number means it will make a NUM x NUM grid of squares


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

function reset()
{
    const boxNodes = document.querySelectorAll('.gridBox'); // Need to convert to array which is what Array.from() does

    const boxArray = Array.from(boxNodes);

    boxArray.forEach(box => {
        box.style.backgroundColor = 'var(--main-bg-c)';
    });
}

// Event Listener

const resetButton = document.querySelector('#resetButton');

resetButton.addEventListener('click',function(e){
    reset();
});



// Function Calls

makeGrid(GRID_NUMBER);
draw();


const slider = document.querySelector('#myRange');

slider.oninput = function(e) {
    document.querySelector('#valueOfSlider').textContent = slider.value;
}
