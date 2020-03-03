<?php
	function getGETParameter(string $name): ?string
	{
		return isset($_GET[$name]) ?(string) $_GET[$name] : null;
	};
	$identifier = getGETParameter('identifier');
	echo 'It is identifier?</br>';
	if ($identifier != null)  
	{
		if (preg_match('/[^0-9]/', $identifier[0]))
		{
			echo 'No. identifier contains unknown symbols.';
		}
		else
		{
			$result = preg_match('/^[a-zA-Z0-9]/', $identifier) ? 'No. First symbol is digit or unknown symbols.' : 'Yes.';
			echo $result;
		};
	}
	else
	{
		echo 'No. identifier is empty or not found.';
	};	