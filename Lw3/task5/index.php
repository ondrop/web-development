<?php
	function getGETParameter(string $name): ?string
	{
		return isset($_GET[$name]) ?(string) $_GET[$name] : null;
	};
	$direction = 'C:/Study/University/Front-end/Lw/Lw3/task4/data/';
	chdir($direction);
	$email = getGETParameter('email');
	$profile = $email . '.txt';
	if (file_exists($profile)) 
	{
		$handle = fopen($profile, 'r');
		$data = file_get_contents($profile);
		fclose($handle);
		echo $data;
	}
	else
	{
		echo "Файл $profile не существует";
	};	