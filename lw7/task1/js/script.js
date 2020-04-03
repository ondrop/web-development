let n = [2, 3, 4, 5];
isPrimeNumber(n);

function isPrimeNumber(n) {
  let isPrime = false;
  let isArray = Array.isArray(n);
  let isNumberArray = false;
  let isNumber = false;
  let array = [];
  let arrLength;

  if (isArray) {
    array = Array.from(n);
    arrLength = array.length;
    isNumberArray = array.every(isInteger);
  } else {
    isNumber = ( (typeof n) == 'number');
  }

  function isInteger(elem) {
    return( (typeof elem) == 'number');
  }

  if ( ( (isArray) && (isNumberArray) ) || (isNumber) )  {
    isPrime = true;
    invalidData = false; 
  }

  if (isNumberArray) {
    for (j = 0; j < arrLength; j++) { 
      n = array.shift(); 
      isPrimeInt(n);
    }     
  } else if (isPrime) {
    isPrimeInt(n);
  } else {
    console.log('Ошибка: неверно введены данные');
  }

  function isPrimeInt(n) {
    isPrime = true;

    for (let i = 2; ( (i < n) && (isPrime) ); i++) {
      if ( ( (n % i) == 0) || (n <= 1) )  {
        isPrime = false;
      }
    }

    if (isPrime) {
      console.log('Результат: ',n , 'простое число');
    } else {
      console.log('Результат: ',n , 'не простое число');
    }
  }
}