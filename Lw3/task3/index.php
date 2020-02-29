<?php
	function getGETParameter(string $name): ?string
	{
		return isset($_GET[$name]) ?(string) $_GET[$name] : null;
	};
	$password = getGETParameter('password');
	$password_strength = 0;
	if (preg_match("/[a-zA-Z0-9]$/i", $password))
	{
		// К надежности прибавляется (4*n), где n - количество всех символов пароля
		$password_strength = $password_strength + (4 * strlen($password));
		//К надежности прибавляется +(n*4), где n - количество цифр в пароле
		preg_match_all('/[0-9]/', $password, $matches, PREG_SET_ORDER);
		$password_strength = $password_strength + (4 * sizeof($matches));
		//К надежности прибавляется +((len-n)*2) в случае, если пароль содержит n символов в верхнем регистре
		if (preg_match("/[A-Z]/", $password))
		{
			preg_match_all('/[A-Z]/', $password, $matches, PREG_SET_ORDER);
			$password_strength = $password_strength + ((strlen($password) - sizeof($matches)) * 2);
		};
		// К надежности прибавляется +((len-n)*2) в случае, если пароль содержит n символов в нижнем регистре
		if (preg_match("/[a-z]/", $password))
		{
			preg_match_all('/[a-z]/', $password, $matches, PREG_SET_ORDER);
			$password_strength = $password_strength + ((strlen($password) - sizeof($matches)) * 2);
		};
		//Если пароль состоит только из цифр вычитаем число равное количеству символов.
		if (ctype_digit($password)) 
		{
			$password_strength = $password_strength - (strlen($password));
		}
		//Если пароль состоит только из букв вычитаем число равное количеству символов.
		elseif (ctype_alpha($password)) 
		{
			$password_strength = $password_strength - (strlen($password));
		};
		//За каждый повторяющийся символ в пароле вычитается количество повторяющихся символов
		foreach (count_chars($password, 1) as $matches => $val) 
		{
   			$password_strength = $password_strength - $val;
		};
		echo 'Password Strength: ' . $password_strength, '</br>';
	}
	else
	{
		//echo 'Password is empty or contains unknown symbols.';
		echo 'Password Strength: ' . $password_strength, '</br>';
	};	