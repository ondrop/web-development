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
	$data = ($first_name . '</br>' . $last_name . '</br>' . 'Email: ' . $email . '</br>' . $age);
	$handle = fopen($direction, 'w+');
	$write_data = fwrite($handle, $data);
	$data = file_get_contents($direction);
	fclose($handle);
	echo $data;