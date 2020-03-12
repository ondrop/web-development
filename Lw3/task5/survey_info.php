<?php
	function getGETParameter(string $name): ?string
	{
		return isset($_GET[$name]) ?(string) $_GET[$name] : null;
	};
	//$direction = glob('/data/');
	$direction = '../task4/data/';
	chdir($direction);
	$email = getGETParameter('email');
	$profile = $email . '.txt';
	//chdir('/task4/data/' . $profile);
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