<?php
require ('connectBd.php');

if ($link == false){
    echo("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
}
else {
    $postData = file_get_contents('php://input');
    $data = json_decode($postData, true);
    $textItem = $data['text'];
    $userId = $data["userId"];
    $sql_add = "INSERT INTO `buyprice` (`id`, `nameBuy`, `userId`) VALUES (NULL, '$textItem', '$userId' )";
    $result = mysqli_query($link, $sql_add);
    

    require('allList.php');
    
}
// выполняем операции с базой данных
     
// закрываем подключение
mysqli_close($link);

?>