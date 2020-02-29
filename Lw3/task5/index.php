<?php
	$direction = 'C:/Study/University/Front-end/Lw/Lw3/task4/data/';
	chdir('C:/Study/University/Front-end/Lw/Lw3/task4/data/');
	$email = scandir($direction, 1);
	$direction = $email[0];
	$handle = fopen($direction, 'r');
	$write_data = fwrite($handle, $data);
	$data = file_get_contents($direction);
	fclose($handle);
	echo $data;