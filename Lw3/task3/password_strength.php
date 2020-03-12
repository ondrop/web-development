<?php
	function getGETParameter(string $name): ?string
	{
		return isset($_GET[$name]) ?(string) $_GET[$name] : null;
	};
	$password = getGETParameter('password');
	$safety = 0; 
	$len_str = strlen($password);
	if (preg_match("/[a-zA-Z0-9]/", $password))
	{	

		// К надежности прибавляется (4*n), 
		// где n - количество всех символов пароля
		$safety = $safety + (4 * $len_str);
		//К надежности прибавляется +(n*4), 
		//где n - количество цифр в пароле
		preg_match_all("/[0-9]/", $password, $matches, PREG_SET_ORDER);
		$safety = $safety + (4 * sizeof($matches));
		//К надежности прибавляется +((len-n)*2) в случае, 
		//если пароль содержит n символов в верхнем регистре
		if (preg_match("/[A-Z]/", $password))
		{
			preg_match_all("/[A-Z]/", $password, $matches, PREG_SET_ORDER);
			$safety = $safety + (($len_str - sizeof($matches)) * 2);
		};
		// К надежности прибавляется +((len-n)*2) в случае, 
		//если пароль содержит n символов в нижнем регистре
		if (preg_match("/[a-z]/", $password))
		{
			preg_match_all("/[a-z]/", $password, $matches, PREG_SET_ORDER);
			$safety = $safety + (($len_str - sizeof($matches)) * 2);
		};
		//Если пароль состоит только из цифр 
		//вычитаем число равное количеству символов.
		if (ctype_digit($password)) 
		{
			$safety = $safety - ($len_str);
		}
		//Если пароль состоит только из букв 
		//вычитаем число равное количеству символов.
		elseif (ctype_alpha($password)) 
		{
			$safety = $safety - ($len_str);
		};
		//За каждый повторяющийся символ в пароле 
		//вычитается количество повторяющихся символов
		foreach (count_chars($password, 1) as $matches => $val) 
		{
			if ($val > 1) 
			{
   				$safety = $safety - $val;
			};
		};
		echo 'Password Strength: ' . $safety, '</br>';
	}
	else
	{
		//echo 'Password is empty or contains unknown symbols.';
		echo 'Password Strength: ' . $safety, '</br>';
	};	