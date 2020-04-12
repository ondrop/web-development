<?php
function getGETParameter(string $name): ?string
{
    return isset($_GET[$name]) ?(string) $_GET[$name] : ' ';
};
$firstName = 'First Name: ' . getGETParameter('first_name');
$lastName = 'Last Name: ' . getGETParameter('last_name');
$email = getGETParameter('email');
$age = 'Age: ' . getGETParameter('age');
const FOLDER = 'data/';
if (!file_exists(FOLDER)) 
{
    mkdir(FOLDER, 0777, true);
}
if ($email) 
{
    $direction = FOLDER . $email . '.txt';
    $email = 'Email: ' . getGETParameter('email');
    $data = ($firstName . PHP_EOL . $lastName . PHP_EOL . $email . PHP_EOL . $age . PHP_EOL);
    $handle = fopen($direction, 'w+');
    fwrite($handle, $data);
    fclose($handle);
}
else
{
    echo 'Enter email';
};  