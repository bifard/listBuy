<?php
    require ('connectBd.php');

    if ($link == false){
        echo("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
    }
    else {
        $postData = file_get_contents('php://input');
        $data = json_decode($postData, true);
        $idItem = $data['id'];
        $sql_del = "UPDATE `buyprice` SET `boolen` = '0' WHERE `buyprice`.`id` = $idItem";
        $result = mysqli_query($link, $sql_del);
        

        require('allList.php');
        
    }
    // выполняем операции с базой данных
        
    // закрываем подключение
    mysqli_close($link);

?>