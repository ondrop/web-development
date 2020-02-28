PROGRAM WorkWithQueryString(INPUT, OUTPUT);
USES
  GPC;
FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR
  CheckKey, QueryString: STRING;
  State: INTEGER; 
BEGIN {GetQueryStringParameter}
  QueryString := GetEnv('QUERY_STRING') + '&';
  GetQueryStringParameter := '';
  State := 0;
  WHILE (Length(QueryString) > 0) AND (State = 0)
  DO
    BEGIN
      CheckKey := Copy(QueryString, 1, Pos('=', QueryString) - 1);
      IF Key = CheckKey
      THEN
        BEGIN
          State := 1;
          DELETE(QueryString, 1, Pos('=', QueryString));
          IF QueryString[1] = '='
          THEN
            State := 0;
          GetQueryStringParameter := Copy(QueryString, 1, Pos('&', QueryString) - 1)
        END
      ELSE
        GetQueryStringParameter := '';
      DELETE(QueryString, 1, Pos('&', QueryString))
    END           
END; {GetQueryStringParameter}                   
BEGIN {WorkWithQueryString}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END. {WorkWithQueryString}
