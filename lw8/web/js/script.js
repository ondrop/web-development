// получаем в sliderCase блок с фильмами
let sliderCase = document.getElementsByClassName('favorite_films');
sliderCase = sliderCase[0];

//получаем его ширину
let sliderCaseWidth = parseFloat(getComputedStyle(sliderCase).width);
let transform = 0;

//получаем все элементы с классом film
let sliderFilms = document.getElementsByClassName('film');
//получаем ширину элемента с классом фильм
let itemWidth = parseFloat(getComputedStyle(sliderFilms[0]).width);
//подсчет ширины смещения для кэйса с фильмами и фильмов 
const stepSlider = (itemWidth + 20) / sliderCaseWidth * 100;
const stepFilm = (sliderCaseWidth / (itemWidth + 20)) * sliderFilms.length * stepSlider;

// мин и макс индексы в массиве
const minIndex = 0;
const maxIndex = sliderFilms.length - 1; // sliderFilms.length это количество фильмов

let rightItemPos = maxIndex - 2;
let leftItemPos = sliderFilms.length;
// показывает нажимали ли на стрелки
let buttonRightPush = false;
let buttonLeftPush = false;

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

        //если индекс фильма находящегося справа стал отрицательным 
        if (rightItemPos < minIndex) {
            rightItemPos = maxIndex;
        }
    }

    //шаг перемещения слайдера
    transform -= stepSlider;

    if (rightItemPos == sliderFilms.length) {
        rightItemPos = minIndex;
        //шаг перемещения фильма
        transformValue += stepFilm;
    }

    //заменяем блоку перемещение по оси Х
    sliderCase.style.transform = 'translateX(' + transform + '%)';  

    if (rightItemPos <= maxIndex) {
        //двигаем фильм
        sliderFilms[rightItemPos].style.transform = 'translateX(' + transformValue + '%)';
    }
        
    rightItemPos++;
}

function leftMove() {
    buttonLeftPush = true;

    if (buttonRightPush) {
        leftItemPos = rightItemPos++;
        buttonRightPush = false;

        if (leftItemPos != sliderFilms.length) {
            transformValue -= stepFilm;
        }

        if (leftItemPos == sliderFilms.length) {
            leftItemPos = minIndex;
        }
    }

    transform += stepSlider;
    leftItemPos--;

    if (leftItemPos == maxIndex) {
        transformValue -= stepFilm;
    }

    sliderCase.style.transform = 'translateX(' + transform + '%)';  

    if (leftItemPos < minIndex) {
        leftItemPos = maxIndex;
        transformValue -= stepFilm;
    }

    sliderFilms[leftItemPos].style.transform = 'translateX(' + transformValue + '%)';
}