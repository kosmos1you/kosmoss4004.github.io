<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <div class="lim-container">
            <div class="header-icon"></div>
            <p class="header-title">База данных Спорткомплекса</p>
        </div>
    </header>
    <div class="content">
        <div class="content-container">
            <div class="headbar">
                <div class="btn-container">
                    <button class="btn-table">Инвентарь</button>
                    <button class="btn-table">Секции</button>
                    <button class="btn-table">Спортсмены</button>
                    <button class="btn-table">Тренеры</button>
                    <button class="btn-table">Залы</button>
                </div>
                <div class="h-line">
                    <div class="line"></div>
                </div>
            </div>
            <div class="table-container">
                <div class="th-container">
                    <?php include 'php-scripts/get-head-table.php'?>
                </div>
                <div class="table-wrap">
                    <div class="table-content">
                        <?php include 'php-scripts/get-data-db.php'?>
                    </div>
                </div>
            </div>
            <div class="footbar">
                <button class="btn-action" id="open-form">Добавить</button>
                <button class="btn-action" id="ch-field">Изменить</button>
                <button class="btn-action" id="del-field">Удалить</button>
            </div>
            <div class="form">
                <p class="f-header"></p>
                <div class="table-headers"></div>
                <div class="values-container"></div>
                <div class="fa-btn-container">
                    <button id="ok">Ок</button>
                    <button id="close-form">Отмена</button>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="lim-container">
            <p class="footer-title">VA Studio</p>
        </div>
    </div>
</body>
</html>
<script src="script.js"></script>