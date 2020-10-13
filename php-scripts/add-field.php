<?php
    include 'connect-to-db.php';

    $insertData;
    $table = '';

    if (isset($_GET['table'])) $table = $_GET['table'];
    else $table = 'inventar';

    if (isset($_GET['insertData'])) $insertData = $_GET['insertData'];
    else $insertData = null;

    $sql = mysqli_query($link, "INSERT INTO $table VALUES ($insertData)");
?>