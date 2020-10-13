<?php
    include 'connect-to-db.php';

    $table = '';

    if (isset($_GET['table'])) $table = $_GET['table'];
    else $table = 'inventar';

    $sql = mysqli_query($link, "SELECT * FROM $table");
    while ($result = mysqli_fetch_row($sql)) {

        echo '<div class="row-table" onclick="selectRow(this)">';

        foreach ($result as $field) {
            echo '<p>' . $field . '</p>';
        }

        echo '</div>';
    }
?>