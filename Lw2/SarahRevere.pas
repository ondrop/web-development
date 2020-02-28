PROGRAM SarahRevere(INPUT, OUTPUT);
USES
  GPC;
VAR
  Lanterns: STRING;
BEGIN {SarahRevere}  
  WRITELN('Content-Type: text/plain');
  WRITELN;
  Lanterns := GetEnv('QUERY_STRING');
  DELETE(Lanterns, 0, 10);
  IF Lanterns = '1'
  THEN
    WRITELN('The British are coming by land.')
  ELSE
    IF Lanterns = '2'
    THEN
      WRITELN('The British are coming by sea.')
    ELSE
      WRITELN('Sarah didn''t say')
END. {SarahRevere}
