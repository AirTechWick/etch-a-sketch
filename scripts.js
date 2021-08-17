// GLOBALS
let GRID_COLOR = "#228D2F"; // default color


function makeGrid(numberOfDivs) 
{
    const wholePage = document.querySelector('.pageWrapper');

    const gridWrap = document.createElement('div');

    gridWrap.setAttribute('class', 'gridWrapper');

    wholePage.appendChild(gridWrap);

    gridWrap.style.setProperty('--column-number', slider.value);

    for(let i = 0; i < numberOfDivs*numberOfDivs; i++)
    {
        let div = document.createElement('div');

        div.setAttribute("class","gridBox");

        gridWrap.appendChild(div);
    }

    startDrawing();
}

function startDrawing() 
{
    const boxNodes = document.querySelectorAll('.gridBox'); // Need to convert to array which is what Array.from() does

    const boxArray = Array.from(boxNodes);

    boxArray.forEach(box => {
                box.addEventListener("mouseover", function(e){
                box.style.backgroundColor = GRID_COLOR;
            }
        );
    });
}

function resetGrid()
{
    const boxNodes = document.querySelectorAll('.gridBox'); // Need to convert to array which is what Array.from() does

    const boxArray = Array.from(boxNodes);

    boxArray.forEach(box => {
        box.style.backgroundColor = 'var(--main-bg-c)';
    });
}

function deleteGrid() 
{
    const pageWrap = document.querySelector('.pageWrapper');

    const gridWrap = document.querySelector('.gridWrapper'); // created from makeGrid() function

    pageWrap.removeChild(gridWrap);
    
}

function start()
{
    makeGrid(slider.value);
    colorChangeListener();
}


function colorChangeListener()
{
    const colorPicker = document.querySelector('#colorPicker');

    colorPicker.addEventListener('change', function(e){
        GRID_COLOR = colorPicker.value;
        console.log(colorPicker.value);
    });
}


// Event Listeners

const resetButton = document.querySelector('#resetButton');

resetButton.addEventListener('click',function(e){
    resetGrid();
});

const slider = document.querySelector('#myRange');

slider.oninput = function(e) {
    document.querySelector('#valueOfSlider').textContent = slider.value + "x" + slider.value;
    deleteGrid();
    makeGrid(slider.value);
}


// Function Calls

start();
