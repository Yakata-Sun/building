<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// Получаем основные данные
$name = $_POST['user_name'] ?? 'Не указано';
$phone = $_POST['user_phone'] ?? 'Не указано';

// Определяем ключи, которые точно не относятся к калькулятору
$excludeKeys = ['user_name', 'user_phone'];

// Формируем массив с данными калькулятора
$calcFields = [];
foreach ($_POST as $key => $value) {
    if (!in_array($key, $excludeKeys)) {
        $calcFields[$key] = htmlspecialchars($value);
    }
}

try {
    $mail->isSMTP();                                    
    $mail->Host = 'smtp.mail.ru';  
    $mail->SMTPAuth = true;                               
    $mail->Username = 'vajravarahi@mail.ru';                 
    $mail->Password = 'x7jvcsUgxQFZYBduwpbX';                           
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; 
    $mail->Port = 465;                                    
     
    $mail->setFrom('vajravarahi@mail.ru', 'Заявка на расчет');  
    $mail->addAddress('vajravarahi@mail.ru');     
    $mail->addAddress('ayakata@yandex.ru');               

    $mail->isHTML(true);                                  
    
    $mail->Subject = 'Новая заявка с сайта';

    $mail->Body = '
        <h3>Новая заявка</h3>
        <p><strong>Имя:</strong> ' . $name . '</p>
        <p><strong>Телефон:</strong> ' . $phone . '</p>
        <p><strong>Email:</strong> ' . $email . '</p>
        <hr>';

    foreach ($calcFields as $key => $value) {
        $mail->Body .= '
            <p><strong>' . ucfirst($key) . ':</strong> ' . $value . '</p>
        ';
    }

    $mail->Body .= '
        <p><em>Дата: ' . date('d.m.Y H:i') . '</em></p>
    ';

    $mail->send();

  echo json_encode([
      'status' => 'success',
      'message' => 'Заявка успешно отправлена'
    ]);

} catch (Exception $e) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Ошибка отправки: ' . $e->getMessage()
    ]);
}

exit;
?>