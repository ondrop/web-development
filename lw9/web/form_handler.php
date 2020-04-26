<?php
$data = file_get_contents('php://input');
$data = json_decode($data, true);

$firstName = $data['first_name'];
$email = $data['email'];
$email = strtolower($email);
$country = $data['country'];
$gender = $data['gender'];
$message = $data['message'];

$checkName = preg_match("/[a-zA-Zа-ЯА-Я]/", $firstName);
const CORRECT = 'correct';
const ERROR = 'error';
$checkName ? $firstName = CORRECT : $firstName = ERROR;
$checkEmail = filter_var($email, FILTER_VALIDATE_EMAIL);
$checkEmail ? $email = CORRECT : $email = ERROR;
$message ? $message = CORRECT : $message = ERROR;

$data = [
    'first_name' => $firstName,
    'email' => $email,
    'message' => $message 
];
echo(json_encode($data));