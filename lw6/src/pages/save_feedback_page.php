<?php

const FOLDER = 'data/';
	
function saveFeedbackPage()
{
	$direction = '../';
	chdir($direction);
	$feedback = [];
	$firstName = getPOSTParameter('first_name');
	$email = getPOSTParameter('email');
	$country = getPOSTParameter('country');
	$gender = getPOSTParameter('gender');
	$message = getPOSTParameter('message');
	if (!file_exists(FOLDER)) 
	{
    	mkdir(FOLDER, 0777, true);
	}

	$checkName = preg_match("/[a-zA-Zа-ЯА-Я]/", $firstName);
	$checkEmail = filter_var($email, FILTER_VALIDATE_EMAIL);

	if (!($checkName))
	{
		$feedback['first_name_error_msg'] = 'Введите корректное имя';
	}	

	if (!($checkEmail))
	{
		$feedback['email_error_msg'] = 'Введите корректный email';
	}


	if ($checkName && $checkEmail && $message)
	{	
    	$direction = FOLDER . strtolower($email) . '.txt';
    	$data = ($firstName . PHP_EOL . 
        	    $email . PHP_EOL . 
            	$country . PHP_EOL . 
            	$gender . PHP_EOL . 
            	$message . PHP_EOL);
    	$handle = fopen($direction, 'w+');
    	fwrite($handle, $data);
    	fclose($handle);
    	$feedback['first_name'] = $firstName;
    	$feedback['email'] = $email;
    	$feedback['message'] = $message;
    	$feedback['shipping_status'] = 'Сообщение успешно отправлено';
	} 

	renderTemplate('main.tpl.php', $feedback);
}