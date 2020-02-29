<?php
	function getGETParameter(string $name): ?string
	{
		return isset($_GET[$name]) ?(string) $_GET[$name] : null;
	};
	$identifier = getGETParameter('identifier');
	echo 'It is identifier?</br>';
	if ($identifier != null)
	{
		if (preg_match("/[a-zA-Z0-9]/", $identifier))
		{
			echo (preg_match("/^[a-zA-Z]$/i", $identifier[0]) ? 'Yes.' : 'No. First symbol is digit.');
		}
		else
		{
			echo 'No. identifier contains unknown symbols.';
		};
	}
	else
	{
		echo 'No. identifier is empty or not found.';
	};	