<?php

function getPOSTParameter(string $name): string
{
    return $_POST[$name];
}

function getRequestMethod(): string
{
    return $_SERVER['REQUEST_METHOD'];
}