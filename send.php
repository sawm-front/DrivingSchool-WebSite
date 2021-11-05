<?php

$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$tel = isset($_POST['tel']) ? $_POST['tel'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';


$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$tel = htmlspecialchars($tel);
$message = htmlspecialchars($message);


$name = urldecode($name);
$email = urldecode($email);
$tel = urldecode($tel);
$message = urldecode($message);

$name = trim($name);
$email = trim($email);
$tel = trim($tel);
$message = trim($message);


if (mail("mail@lauraschool.ru", 
"Новая заявка с сайта lauraschool.ru",
"Имя: ".$name."\n".
"Email: ".$email."\n".
"Сообщение: ".$message."\n".
"Телефон: ".$tel."\n",
"From: no-reply@mydomain.ru \r\n")
){
   echo('Письмо успешно отправлено!');
}

else{
   echo('Есть ошибки проверьте данные..');
}
?>


