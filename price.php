<?php
    require ('connectBd.php');

    if ($link == false){
        echo("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
    }
    else {
        $postData = file_get_contents('php://input');
        $data = json_decode($postData, true);
        $idItem = $data['id'];
        $price = $data['price'];
        $sql_price = "UPDATE `buyprice` SET `price` = '$price' WHERE `buyprice`.`id` = $idItem";
        
        $result = mysqli_query($link, $sql_price);
        

        require('allList.php');
        
    }
    // выполняем операции с базой данных
        
    // закрываем подключение
    mysqli_close($link);

?>