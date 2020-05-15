<?php

const DIRECTION = '../';
function feedbacksListPage()
{
	$direction = DIRECTION . FOLDER;
	chdir($direction);
	$email = getPOSTParameter('email');
	$file = strtolower($email) . '.txt';
	$feedback['email'] = $email;
	if (($direction) && (file_exists($file))) 
	{
    	$feedback['answer'] = file($file);
    }
	else
	{
		$feedback['error_msg'] = 'Данный email не существует';
	}

	renderTemplate('feedbacks.tpl.php', $feedback);
}