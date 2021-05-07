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
        $sql = "SELECT `name`, `pass`, `id` FROM `user` WHERE name = '$name' AND pass = '$pass' ";
        $result = mysqli_query($link, $sql);
        if ($result){
            $row = mysqli_fetch_array($result);
            echo(json_encode($row));
        } else {
            echo('No');
        }
       

    }   
?>