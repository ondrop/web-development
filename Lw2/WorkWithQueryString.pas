PROGRAM WorkWithQueryString(INPUT, OUTPUT);
USES
  GPC;
FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR
  CheckKey, QueryString: STRING;
BEGIN {GetQueryStringParameter}
  QueryString := GetEnv('QUERY_STRING') + '&';
  GetQueryStringParameter := '';
  WHILE (Length(QueryString) > 0)
  DO
    BEGIN
      CheckKey := Copy(QueryString, 1, Pos('=', QueryString) - 1);
      IF Key = CheckKey
      THEN
        BEGIN
          DELETE(QueryString, 1, Pos('=', QueryString));
          GetQueryStringParameter := Copy(QueryString, 1, Pos('&', QueryString) - 1);
          QueryString := ''
        END;
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
