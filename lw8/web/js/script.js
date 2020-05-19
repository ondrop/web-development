let slider = document.getElementsByClassName('favorite_films');
slider = slider[0];

let sliderWidth = parseFloat(getComputedStyle(slider).width);
let arrayOfFilms = document.getElementsByClassName('film');
let filmWidth = parseFloat(getComputedStyle(arrayOfFilms[0]).width);

const widthBetweenFilms = 20;
const stepSlider = (filmWidth + widthBetweenFilms) / sliderWidth * 100;
const stepFilm = (sliderWidth / (filmWidth + widthBetweenFilms)) * arrayOfFilms.length * stepSlider;

const minIndex = 0;
const maxIndex = arrayOfFilms.length - 1;
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
        rightItemPos = leftItemPos - 1;
        buttonLeftPush = false;

        if (leftItemPos != minIndex) {
            transformForFilm += stepFilm;            
        }
 
        rightItemPos = changePos(rightItemPos, minusIndex, maxIndex);
        console.log('test', rightItemPos);
    }

    transformForSlider -= stepSlider;

    if (rightItemPos == arrayOfFilms.length) {
        rightItemPos = minIndex;
        transformForFilm += stepFilm;
    }

    blockMove(slider, transformForSlider); 
    setTimeout(blockMove, 1000, arrayOfFilms[rightItemPos], transformForFilm);       
    rightItemPos++;

    console.log('вправо ', rightItemPos, maxIndex);
}


function leftMove() {
    buttonLeftPush = true;

    if (buttonRightPush) {
        leftItemPos = rightItemPos++;
        buttonRightPush = false;

        if (leftItemPos != arrayOfFilms.length) {
            transformForFilm -= stepFilm;
        }

        leftItemPos = changePos(leftItemPos, arrayOfFilms.length, minIndex);
    }

    transformForSlider += stepSlider;
    leftItemPos = leftItemPos - 1;

    if (leftItemPos == maxIndex) {
        transformForFilm -= stepFilm;
    }

    blockMove(slider, transformForSlider); 

    if (leftItemPos == minusIndex) {
        leftItemPos = maxIndex;
        transformForFilm -= stepFilm;
    }

    blockMove(arrayOfFilms[leftItemPos], transformForFilm);

    console.log('влево ', leftItemPos);
}

function changePos(itemPos, minusIndex, maxIndex) {
    if (itemPos == minusIndex) {
        itemPos = maxIndex;
    }

    return itemPos;
}

function blockMove(slider, transform) {
    slider.style.transform = 'translateX(' + transform + '%)';   
}