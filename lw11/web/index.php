<?php

require_once '../src/common.inc.php';
if (getRequestMethod() == 'POST')
{
    saveFeedbackPage();
}
else
{
    mainPage(); 
}