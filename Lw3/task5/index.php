<?php
	$direction = 'C:/Study/University/Front-end/Lw/Lw3/task4/data/';
	chdir('C:/Study/University/Front-end/Lw/Lw3/task4/data/');
	$email = scandir($direction, 1);
	$direction = $email[0];
	$handle = fopen($direction, 'r');
	$data = file_get_contents($direction);
	fclose($handle);
	echo $data;