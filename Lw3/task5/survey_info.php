<?php
	function getGETParameter(string $name): ?string
	{
		return isset($_GET[$name]) ?(string) $_GET[$name] : null;
	};
	$direction = '../task4/data/';
	chdir($direction);
	$email = getGETParameter('email');
	$profile = $email . '.txt';
	if (file_exists($profile)) 
	{
		$handle = fopen($profile, 'r');
		while (!feof($handle)) 
		{	
			$data = fgets($handle);
			echo nl2br($data);
		};
		fclose($handle);
	}
	else
	{
		echo "Файл $profile не существует";
	};	