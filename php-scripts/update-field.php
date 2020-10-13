<?php
    include 'connect-to-db.php';

    $table = '';
    $updateField = '';
    $nameClmn = '';
    $idField;

    if (isset($_GET['table'])) $table = $_GET['table'];
    else $table = 'inventar';

    if (isset($_GET['updateField'])) $updateField = $_GET['updateField'];
    else $nameColumn = 'id_inv';

    if (isset($_GET['nameClmn'])) $nameClmn = $_GET['nameClmn']; 

    if (isset($_GET['idField'])) $idField = $_GET['idField'];

    $sql = mysqli_query($link, "UPDATE $table SET $updateField WHERE $nameClmn = $idField");
?>