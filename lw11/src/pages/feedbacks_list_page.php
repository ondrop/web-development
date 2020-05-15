<?php

function feedbacksListPage()
{
    $email = getPOSTParameter('email');
    $data = getFeedback($email);
    if ($data) 
    {   
        $data = $data[0];
        $feedback['answer'] = array_unique($data);
    }
    else
    {
        $feedback['error_msg'] = 'Данный email не существует';
    }

    renderTemplate('feedbacks.tpl.php', $feedback);
}