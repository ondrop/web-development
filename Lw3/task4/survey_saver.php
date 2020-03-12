<?php
	function getGETParameter(string $name): ?string
	{
		return isset($_GET[$name]) ?(string) $_GET[$name] : ' ';
	};
	$first_name = 'First Name: ' . getGETParameter('first_name');
	$last_name = 'Last Name: ' . getGETParameter('last_name');
	$email = getGETParameter('email');
	$age = 'Age: ' . getGETParameter('age');
	if ($email != null) 
	{
		$direction = 'data/' . $email . '.txt';
		$email = 'Email: ' . getGETParameter('email');
		$data = ($first_name . PHP_EOL . $last_name . PHP_EOL . $email . PHP_EOL . $age . PHP_EOL);
		$handle = fopen($direction, 'w+');
		fwrite($handle, $data);
		fclose($handle);
	}
	else
	{
		echo 'email не задан';
	};	