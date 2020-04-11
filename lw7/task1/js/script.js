let n = [2, 3, 4, 5];
isPrimeNumber(n);

function isPrimeNumber(n) {
  let isPrime = false;
  let isArray = Array.isArray(n);
  let isNumberArray = false;
  let isNumber = false;
  let arrData = [];
  let arrLength;

  if (isArray) {
    arrData = Array.from(n);
    arrLength = arrData.length;
    isNumberArray = arrData.every(isInteger);
  } 

  if (isNumberArray) {
    for (j = 0; j < arrLength; j++) { 
      n = arrData.shift(); 
      isPrimeInt(n);
      outputResult(n);
    }     
  } else if (isInteger(n)) {
    isPrimeInt(n);
    outputResult(n);
  } else {
    console.log('Ошибка: неверно введены данные');
  }
}

function isInteger(elem) {
  return((typeof elem) == 'number');
}

function isPrimeInt(n) {
  isPrime = true;

  for (let i = 2; ((i < n) && (isPrime)); i++) {
    if (((n % i) == 0) || (n <= 1))  {
      isPrime = false;
    }
  }
} 

function outputResult(n) { 
  if (isPrime) {
    console.log('Результат: ', n, 'простое число');
  } else {
    console.log('Результат: ', n, 'не простое число');
  }
}   