<?php

require ('connectBd.php');

if ($link == false){
    echo("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
}
else {
    $postData = file_get_contents('php://input');
    $data = json_decode($postData, true);
    $idItem = $data['id'];
    $sql_del = "DELETE FROM `buyprice` WHERE `id` = '$idItem'";
    $result = mysqli_query($link, $sql_del);
    

    require('allList.php');
    
}
// выполняем операции с базой данных
     
// закрываем подключение
mysqli_close($link);

?>