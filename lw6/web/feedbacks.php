<?php

require_once '../src/common.inc.php';
if (getRequestMethod() == 'POST')
{
	feedbacksListPage();	
}
else
{
	renderTemplate('feedbacks.tpl.php');
}	