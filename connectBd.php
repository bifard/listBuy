<?php
$host = 'localhost'; // адрес сервера 
$database = 'buy'; // имя базы данных
$user = 'mysql'; // имя пользователя
$password = 'mysql'; // пароль

 
// подключаемся к серверу
$link = mysqli_connect($host, $user, $password, $database);
?>