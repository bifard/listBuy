<?php
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);
$userId = $data["userId"];
$sql = "SELECT * FROM `buyprice` WHERE userID = '$userId'";;
$result = mysqli_query($link, $sql);
while ($row = mysqli_fetch_array($result)) {
    $mas[] = $row; 
}
$a = json_encode($mas);
echo($a);
?>