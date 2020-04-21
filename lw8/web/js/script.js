// получаем в blockForFilms блок с фильмами
let blockForFilms = document.getElementsByClassName('favorite_films');
blockForFilms = blockForFilms[0];

//получаем его ширину
let blockForFilmsWidth = parseFloat(getComputedStyle(blockForFilms).width);
//получаем все элементы с классом film
let arrayOfFilms = document.getElementsByClassName('film');
//получаем ширину элемента с классом фильм
let filmWidth = parseFloat(getComputedStyle(arrayOfFilms[0]).width);
//подсчет ширины смещения для кэйса с фильмами и фильмов 
const widthBetweenFilms = 20;
const stepSlider = (filmWidth + widthBetweenFilms) / blockForFilmsWidth * 100;
const stepFilm = (blockForFilmsWidth / (filmWidth + widthBetweenFilms)) * arrayOfFilms.length * stepSlider;

// мин и макс индексы в массиве
const minIndex = 0;
const maxIndex = arrayOfFilms.length - 1; // arrayOfFilms.length это количество фильмов
const minusIndex = -1;

let rightItemPos = maxIndex - 2;
let leftItemPos = arrayOfFilms.length;
// показывает нажимали ли на стрелки
let buttonRightPush = false;
let buttonLeftPush = false;

let transform = 0;
//перемещение фильма на это число
let transformValue = 0;

// получение кнопок
let sliderControl = document.getElementsByClassName('slider_control'); 
let leftButton = sliderControl[0];
let rightButton = sliderControl[1];

//действия происходящие при нажатии
rightButton.onclick = rightMove;
leftButton.onclick = leftMove;

function rightMove() {
    buttonRightPush = true;

    // если левая стрелка была нажата
    if (buttonLeftPush) {
        rightItemPos = leftItemPos--;
        buttonLeftPush = false;

        // если индекс фильма находящегося слева не равно мин индексу
        if (leftItemPos != minIndex) {
            transformValue += stepFilm;
            
        }
 
        changePos(rightItemPos, minusIndex, maxIndex);
    }

    //шаг перемещения слайдера
    transform -= stepSlider;

    if (rightItemPos == arrayOfFilms.length) {
        rightItemPos = minIndex;
        //шаг перемещения фильма
        transformValue += stepFilm;
    }

    //заменяем блоку перемещение по оси Х
    blockFilmMove(blockForFilms, transform);
    //blockForFilms.style.transform = 'translateX(' + transform + '%)';  

    if (rightItemPos <= maxIndex) {
        //двигаем фильм
        filmMove(rightItemPos, transformValue)
        //arrayOfFilms[rightItemPos].style.transform = 'translateX(' + transformValue + '%)';
    }
        
    rightItemPos++;
}


function leftMove() {
    buttonLeftPush = true;

    if (buttonRightPush) {
        leftItemPos = rightItemPos++;
        buttonRightPush = false;

        if (leftItemPos != arrayOfFilms.length) {
            transformValue -= stepFilm;
        }

        changePos(leftItemPos, arrayOfFilms.length, minIndex);
    }

    transform += stepSlider;
    leftItemPos--;

    if (leftItemPos == maxIndex) {
        transformValue -= stepFilm;
    }

    blockFilmMove(blockForFilms, transform);
    //blockForFilms.style.transform = 'translateX(' + transform + '%)';  

    if (leftItemPos == minusIndex) {
        leftItemPos = maxIndex;
        transformValue -= stepFilm;
    }

    filmMove(leftItemPos, transformValue);
    //arrayOfFilms[leftItemPos].style.transform = 'translateX(' + transformValue + '%)';
}

function changePos(rightItemPos, minusIndex, maxIndex) {
    if (rightItemPos == minusIndex) {
        rightItemPos = maxIndex;
    }
}

function blockFilmMove(blockForFilms, transform) {
    blockForFilms.style.transform = 'translateX(' + transform + '%)';   
}

function filmMove(leftItemPos, transformValue) {
    arrayOfFilms[leftItemPos].style.transform = 'translateX(' + transformValue + '%)';
}