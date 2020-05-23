<?php
function getPOSTParameter(string $name): ?string
{
    return isset($_POST[$name]) ?(string) $_POST[$name] : null;
}
$direction = '../';
chdir($direction);
$firstName = getPOSTParameter('first_name');
$email = getPOSTParameter('email');
$email = strtolower($email);
$country = getPOSTParameter('country');
$gender = getPOSTParameter('gender');
$message = getPOSTParameter('message');
const FOLDER = 'data/';
if (!file_exists(FOLDER)) 
{
    mkdir(FOLDER, 0777, true);
}
if ($firstName && $email && $message)
{
    $direction = FOLDER . $email . '.txt';
    $data = ($firstName . PHP_EOL . 
            $email . PHP_EOL . 
            $country . PHP_EOL . 
            $gender . PHP_EOL . 
            $message . PHP_EOL);
    $handle = fopen($direction, 'w+');
    fwrite($handle, $data);
    fclose($handle);
    echo 'Data recorded';
} 
else 
{
    echo 'Error';
}   