<?php
function getGETParameter(string $name): ?string
{
    return isset($_GET[$name]) ?(string) $_GET[$name] : null;
};
const DIRECTION = '../task4/';
const FOLDER = 'data/';
$direction = DIRECTION . FOLDER;
chdir($direction);
$email = getGETParameter('email');
$profile = $email . '.txt';
if (($direction) and (file_exists($profile))) 
{
    $handle = fopen($profile, 'r');
    while (!feof($handle)) 
    {   
        $data = fgets($handle);
        echo nl2br($data);
    };
    fclose($handle);
}
else
{
    echo "Folder 'data' or file does not exist";
}