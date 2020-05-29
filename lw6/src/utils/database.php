<?php

function database(): PDO
{
	static $connection = null;
	if ($connection == null)
	{
		echo 'Create new database connection\n';
		$connection = new PDO(Db_DSN, DB_USER, DB_PASSWORD);
	}

	return $connection;
}

function saveFeedback(array $feedback): void
{

}

function getFeedback(string $email): array
{

}