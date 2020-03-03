<?php
	$direction = 'C:/Study/University/Front-end/Lw/Lw3/task4/data/';
	chdir($direction);
	$email = scandir($direction, 1);
	$profile = $email[0];
	$handle = fopen($profile, 'r');
	$data = file_get_contents($profile);
	fclose($handle);
	echo $data;