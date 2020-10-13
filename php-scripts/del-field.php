<?php
    include 'connect-to-db.php';

    $table = '';
    $nameColumn = '';
    $id;

    if (isset($_GET['table'])) $table = $_GET['table'];
    else $table = 'inventar';

    if (isset($_GET['nameColumn'])) $nameColumn = $_GET['nameColumn'];
    else $nameColumn = 'id_inv';

    if (isset($_GET['id'])) $id = $_GET['id'];

    $sql = mysqli_query($link, "DELETE FROM $table WHERE $nameColumn = $id");
?>