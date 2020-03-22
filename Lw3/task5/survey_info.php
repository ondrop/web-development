<?php
    function getGETParameter(string $name): ?string
    {
        return isset($_GET[$name]) ?(string) $_GET[$name] : null;
    };
    $direction = '../task4/';
    chdir($direction);
    if (file_exists('data')) 
    {
        $direction = $direction . 'data/';
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
            echo "File '$profile' does not exist";
        }	
    }
    else
    {
    	echo "Folder 'data' does not exist";
    }