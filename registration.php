<?php
    require ('connectBd.php');

    if ($link == false){
        echo("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
    }
    else {
        $postData = file_get_contents('php://input');
        $data = json_decode($postData, true);
        $name = $data['name'];
        $pass = $data['pass'];
        $sql = "INSERT INTO `user` (`id`, `name`, `pass`) VALUES (NULL, '$name', '$pass')";
        $result = mysqli_query($link, $sql);
        if ($result){
            echo('Ok');
        } else {
            echo('No');
        }
       

    }
?>