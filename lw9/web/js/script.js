let slider = document.getElementsByClassName('favorite_films');
slider = slider[0];

let sliderWidth = parseFloat(getComputedStyle(slider).width);
let arrayOfFilms = document.getElementsByClassName('film');
let filmWidth = parseFloat(getComputedStyle(arrayOfFilms[0]).width);

const widthBetweenFilms = 20;
const stepSlider = (filmWidth + widthBetweenFilms) / sliderWidth * 100;
const stepFilm = (sliderWidth / (filmWidth + widthBetweenFilms)) * arrayOfFilms.length * stepSlider;

const minIndex = 0;
const maxIndex = arrayOfFilms.length - 1; // arrayOfFilms.length это количество фильмов
const minusIndex = -1;

let rightItemPos = maxIndex;
let leftItemPos = arrayOfFilms.length;
let buttonRightPush = false;
let buttonLeftPush = false;

let transformForSlider = 0;
let transformForFilm = 0;

let sliderControl = document.getElementsByClassName('slider_control'); 
let leftButton = sliderControl[0];
let rightButton = sliderControl[1];

rightButton.onclick = rightMove;
leftButton.onclick = leftMove;

function rightMove() {
    buttonRightPush = true;

    if (buttonLeftPush) {
        rightItemPos = leftItemPos--;
        buttonLeftPush = false;

        if (leftItemPos != minIndex) {
            transformForFilm += stepFilm;            
        }
 
        changePos(rightItemPos, minusIndex, maxIndex);
    }

    transformForSlider -= stepSlider;

    if (rightItemPos == arrayOfFilms.length) {
        rightItemPos = minIndex;
        transformForFilm += stepFilm;
    }

    blockMove(slider, transformForSlider); 

    if (rightItemPos <= maxIndex) {
        setTimeout(blockMove, 1000, arrayOfFilms[rightItemPos], transformForFilm);
    }
        
    rightItemPos++;
}


function leftMove() {
    buttonLeftPush = true;

    if (buttonRightPush) {
        leftItemPos = rightItemPos++;
        buttonRightPush = false;

        if (leftItemPos != arrayOfFilms.length) {
            transformForFilm -= stepFilm;
        }

        changePos(leftItemPos, arrayOfFilms.length, minIndex);
    }

    transformForSlider += stepSlider;
    leftItemPos--;

    if (leftItemPos == maxIndex) {
        transformForFilm -= stepFilm;
    }

    blockMove(slider, transformForSlider); 

    if (leftItemPos == minusIndex) {
        leftItemPos = maxIndex;
        transformForFilm -= stepFilm;
    }

    blockMove(arrayOfFilms[leftItemPos], transformForFilm);
}

function changePos(rightItemPos, minusIndex, maxIndex) {
    if (rightItemPos == minusIndex) {
        rightItemPos = maxIndex;
    }
}

function blockMove(slider, transform) {
    slider.style.transform = 'translateX(' + transform + '%)';   
}