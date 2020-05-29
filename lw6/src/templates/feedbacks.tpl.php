<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Список ответов</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400;1,600&display=swap" rel="stylesheet">
  </head>
  <body>
    <div class="form_case form_case_for_answer">
      <h1 class="form_header form_header_for_answer">Просмотр запроса</h1>
      <form action="feedbacks.php" method="post" class="form">
        <label class="label_star for_label_tag" for="email">Введите email</label>
        <input type="email" name="email" value="<?php echo $args['email'] ?? ''; ?>" required class="for_input_tag" id="email">
        <button type="submit" class="button_send">Отправить</button>
      </form>
    </div>
    <?php if (isset($args['error_msg'])): ?>
      <p class="feedback_answer error_msg"><?php echo $args['error_msg']; ?></p> 
    <?php endif ?>  
    <?php if (isset($args['answer'])): ?>
      <div class="feedback_answer">
        <div class="response_names">
          <span class="for_label_tag">Имя:</span>
          <span class="for_label_tag">Email:</span>
          <span class="for_label_tag">Страна:</span>
          <span class="for_label_tag">Пол:</span>
          <span class="for_label_tag">Сообщение:</span>
        </div>
        <div class="response_data">
          <?php foreach($args['answer'] as $answer): ?>
            <p class="for_label_tag"><?php echo $answer; ?></p>
          <?php endforeach; ?>
        </div>
      </div> 
    <?php endif ?>  
  </body>
</html>