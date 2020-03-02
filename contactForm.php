<?php
header('Content-type: text/plain');
header('Access-Control-Allow-Origin: *');

$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$subject = "New message from Mobilitas web";
$content = "Content: " . $_POST["content"] . "\r\n---------\r\nName: " . $name .  "\r\nEmail: " . $email .  "\r\nPhone: " . $phone;

$toEmail = "vase.a@fewgoodgeeks.com";
$mailHeaders = "From: " . $name . "<". $email .">\r\n";
if(mail($toEmail, $subject, $content, $mailHeaders)) {
    $message = "Your contact information is received successfully.";
    $type = "success";
}