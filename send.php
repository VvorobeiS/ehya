<?php
// Файлы phpmailer
require './assets/phpmailer/PHPMailer.php';
require './assets/phpmailer/SMTP.php';
require './assets/phpmailer/Exception.php';

if($_POST['form'] == 1) {

     // Переменные, которые отправляет пользователь
    $subscribe = $_POST['subscribe'];
    
    // Формирование самого письма
    $title = "Новое обращение Ehya";
    $body = "
    <h2>Подписка на новости</h2>
    <br>Почта: $subscribe<br>
    ";
 } 
if($_POST['form'] == 2) {
    
    // Переменные, которые отправляет пользователь
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Формирование самого письма
    $title = "Новое обращение Ehya";
    $body = "
    <h2>Modal</h2>
    <b>Имя: $name<br>
    <br>Телефон: $phone<br>
    <br>Эл. почта: $email<br>
    <b>Сообщение:</b> $message
    ";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = ''; // SMTP сервера вашей почты
    $mail->Username   = ''; // Логин на почте
    $mail->Password   = ''; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('', 'Ehya'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('diablo300996@mail.ru');  
    
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

    } catch (Exception $e) {
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }

    // Отображение результата
    header('Location: message.html');