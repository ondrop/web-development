<?php
	function getGETParameter(string $name): ?string
	{
		return isset($_GET[$name]) ?(string) $_GET[$name] : ' ';
	};
	$first_name = 'First Name: ' . getGETParameter('first_name');
	$last_name = 'Last Name: ' . getGETParameter('last_name');
	$email = getGETParameter('email');
	$age = 'Age: ' . getGETParameter('age');
	$direction = 'data/' . $email . '.txt';
	$email = 'Email: ' . getGETParameter('email');
	$data = ($first_name . '</br>' . $last_name . '</br>' . $email . '</br>' . $age);
	$handle = fopen($direction, 'w+');
	fwrite($handle, $data);
	fclose($handle);