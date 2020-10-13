<?php
    include 'connect-to-db.php';

    $table = '';

    if (isset($_GET['table'])) $table = $_GET['table'];
    else $table = 'inventar';

    $sql = "SHOW COLUMNS FROM $table";
    $result = mysqli_query($link, $sql);

    while ($row = mysqli_fetch_array($result)) {
        echo '<p>' . $row['Field'] . '</p>';
    }
?>