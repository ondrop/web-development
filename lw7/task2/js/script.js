calc('+ 1 (+ 2 (+ 3 4))');

  function calc(input) {
    const re = /[()-+ /*.0-9]$/;
    const act =  /[-+*/]$/;

    let data = input;
    let isCorrect = ( ( re.test(data) ) && (typeof data == 'string') );
    let n = -1;
    let a;
    let b;
    let fileLength = data.length;
    let sum = 0;
    let isNumber = false;
    let checkSymbol = false;

    recursion(n);

    function recursion(n) {
      n++;

      if ( ( act.test( data[n] ) ) && (isCorrect) ) {
        n++;

        if ( ( data[n] ) == ' ') {
          forDigit(a);
          //console.log(sum);

          n--;
          console.log(data[n]);
          checkDigit();
          console.log(sum);          

          function checkDigit() {
            n++;

            if (n < fileLength) {
              if (data[n + 1] != '(') {
                forDigit(b);  
              } else {
                n++;
                recursion(n);
              } 
              
            //  console.log(sum);  
            }

            if (n < fileLength) {
              n++;
              forDigit(a);
              //console.log(sum); 
            } 

            if (n < fileLength) {
              checkDigit();
            }           
          }

          function forDigit(a) {
            n++;
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
            sum = sum + a;
            return a;
          } 

        } else if ( ( data[n] ) == '(') {
          recursion(n);

        } else {
          console.log('Неверно введены данные', n);  
        }
      } else {
        console.log('Неверно введены данные');
      } 
    }
  }