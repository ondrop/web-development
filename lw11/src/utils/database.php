<?php

function database(): PDO
{
    static $connection = null;
    if ($connection == null)
    {
        $connection = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
    }

    return $connection;
}

function saveFeedback(array $feedback): void
{
    $name = database()->quote($feedback['name']);
    $email = database()->quote($feedback['email']);
    $country = database()->quote($feedback['country']);
    $gender = database()->quote($feedback['gender']);
    $message = database()->quote($feedback['message']);
    $stm = database()->query("
        INSERT INTO 
            user_posts(name, email, country, gender, message)
        VALUES
            ($name, $email, $country, $gender, $message)
        ");
}

function getFeedback(string $email): array
{
    $email = database()->quote($email);
    $stm = database()->query("
        SELECT 
            * 
        FROM 
            user_posts
        WHERE 
            email = $email
        ");
    $feedback = $stm->fetchAll();
    return $feedback;
}