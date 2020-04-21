calc('+ 1 (+ 2 3)');

  function calc(input) {
    const re = /[()-+ /*.0-9]$/;
    const act =  /[-+*/]$/;

    let data = input;
    let isCorrect = ( ( re.test(data) ) && (typeof data == 'string') );
    let n = -1;
    let a = 0;
    let b = 0;
    let fileLength = data.length;
    let sum = 0;
    let isNumber = false;
    let checkSymbol = false;

    sum = recursion();
    console.log('Ответ: ', sum);

    function recursion() {
      n++;
      console.log('Проверка перед рекурсией', data[n]);

      if ( ( act.test( data[n] ) ) && (isCorrect) ) {
        n++;
        console.log(data[n], n);

        a = checkSecondDigit(n);
        console.log('После проыеряющей функции', a, n);
        //a = a[0];
        //n = a[1];

        function checkSecondDigit() {
          
          if ( data[n] == ' ') {
            console.log('Условие с пробелом');
            n++;
            isNumber = data[n];
            isNumber = +isNumber;
            console.log('До функции', a);
            sum = a;

            if ( ( typeof isNumber == 'number') && (n < fileLength) ) {
              console.log('Ищем след число. n =', n);
              a = forDigit(a);
            } else if ( ( data[n] == '(' ) && (n < fileLength) )  {
              recursion();
            } 

            sum = sum + a;
            console.log('После функции a =', a, 'n= ', n, 'Сумма= ', sum);

            if ( ( data[n] != ')' ) && (n < fileLength) ) {
              if ( data[n + 1] == '(' ) {
                n++;
              }
              a = checkSecondDigit();
              console.log('Проверили второе число', a);
            } else {
              console.log('Конец функии, a =', a, 'Сумма', sum, 'n= ', n); 
            }

            console.log('До сумма ', a, sum, 'n=', n);
            console.log('Сумма ', sum, 'n=', n);
            return sum;

            function forDigit(a) {
              let space = data.indexOf(' ', n);
              let bracket = data.indexOf(')', n);

              if (space <= bracket) {
                checkSymbol = space;
              } else if (space >= bracket) {
                checkSymbol = bracket;
              } else {
                checkSymbol = fileLength;
              }
            
              if ( (space == -1) && (bracket == -1) ) {
                checkSymbol = fileLength;  
              } else if ( (space == -1) && (bracket != -1) ) {
                checkSymbol = bracket;
              } else if ( (space != -1) && (bracket == -1) ) {
                checkSymbol = space;
              }

              for (a = ''; ( (n < fileLength) && (n < checkSymbol) ); n++) {
                a = a + data[n];
              }

              a = +a; 
              console.log('Проход', a, n);
              return a;
            } 

          } else if ( ( data[n] ) == '(') {
            console.log('До рекурсии', sum, a);
            b = b + sum;
            a = recursion();
            console.log('После рекурсии a =', a, data[n], n);
            sum = a + b;
            n++;
            console.log('После присваиваний', a, data[n], n);
            b = checkSecondDigit();
            console.log('Если скобочка', sum, a, b);

          } else {
            a = 'Неверно введены данные2';  
          }
        }
      } else {
        a = 'Неверно введены данные1';
      }

      return sum;
    }
  }