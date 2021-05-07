<?php
require ('connectBd.php');

if ($link == false){
    echo("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
}
else {
    require('allList.php');
}
// выполняем операции с базой данных
     
// закрываем подключение
mysqli_close($link);

?>