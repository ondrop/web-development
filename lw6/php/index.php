<?php
    function getPOSTParameter(string $name): ?string
    {
        return isset($_POST[$name]) ?(string) $_POST[$name] : null;
    };
    $direction = '../';
    chdir($direction);
    $firstName = getPOSTParameter('first_name');
    $email = getPOSTParameter('email');
    $country = getPOSTParameter('country');
    $gender = getPOSTParameter('gender');
    $message = getPOSTParameter('message');
    if (!file_exists('data')) 
    {
        mkdir('data', 0777, true);
    }
    if (($firstName) and ($email) and ($message))
    {
        $direction = 'data/' . $email . '.txt';
        $data = ($firstName . PHP_EOL . $email . PHP_EOL . $country . PHP_EOL . $gender . PHP_EOL . $message . PHP_EOL);
        $handle = fopen($direction, 'w+');
        fwrite($handle, $data);
        fclose($handle);
        echo "Data recorded";
    } 
    else 
    {
        echo "Error";
    }   