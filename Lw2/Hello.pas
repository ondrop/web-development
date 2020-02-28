PROGRAM Hello(INPUT, OUTPUT);
USES
  GPC;
VAR 
  UserName, CheckName: STRING;
  State: CHAR;
BEGIN {Hello}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  UserName := GetEnv('QUERY_STRING');
  CheckName := Copy(UserName, 1, 5);
  State := '0';
  IF CheckName = 'name='
  THEN
    State := '1';
  DELETE(UserName, 0, 6);
  IF (UserName <> '') AND (State = '1')
  THEN
    WRITELN('Hello dear, ', UserName, '!')
  ELSE  
    WRITELN('Hello, Anonymous!')
END. {Hello}
