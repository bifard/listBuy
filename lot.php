<?php
    require ('connectBd.php');

    if ($link == false){
        echo("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
    }
    else {
        $postData = file_get_contents('php://input');
        $data = json_decode($postData, true);
        $idItem = $data['id'];
        $lot = $data['lot'];
        $sql_lot = "UPDATE `buyprice` SET `lot` = '$lot' WHERE `buyprice`.`id` = $idItem";
        
        $result = mysqli_query($link, $sql_lot);
        

        require('allList.php');
        
    }
    // выполняем операции с базой данных
        
    // закрываем подключение
    mysqli_close($link);

?>