let currentTable = 'inventar',
    formActive = false,
    formAction = null,
    selectingRow = null;

const btnTable = document.querySelectorAll('.btn-table');

const thContainer = document.querySelector('.th-container');
const tableContainer = document.querySelector('.table-content');

for (let i = 0; i < btnTable.length; i++) {
    btnTable[i].addEventListener('click', switchTable);
}

function makeRequestForView(file, table) {
    let request = new XMLHttpRequest();

    function getHeader() {
        if (request.readyState === 4) {
            let status = request.status;
    
            if (status === 200) {
                thContainer.innerHTML = request.responseText;
            }
        }
    }

    function getData() {
        if (request.readyState === 4) {
            let status = request.status;
    
            if (status === 200) {
                tableContainer.innerHTML = request.responseText;
            }
        }
    }

    let url = 'http://SportComplex.ru:81/php-scripts/' + file + '?table=' + table;

    request.open('GET', url);

    if (file === 'get-head-table.php') {
        request.onreadystatechange = getHeader;
    }

    if (file === 'get-data-db.php') {
        request.onreadystatechange = getData;
    }

    request.send();
}

function switchTable(e) {
    if (!formActive) {
        const btn = e.target;
        const hLine = document.querySelector('.line');

        if (btn === btnTable[0]) {
            //Передвигаем линию
            hLine.style.marginLeft = '4px';

            //Делаем запрос на сервер
            makeRequestForView('get-head-table.php', 'inventar');
            makeRequestForView('get-data-db.php', 'inventar');

            currentTable = 'inventar';
        }
        else if (btn === btnTable[1]) {
            //Передвигаем линию
            hLine.style.marginLeft = 'calc(40% - (100%/5) + 4px)';
            
            //Делаем запрос на сервер
            makeRequestForView('get-head-table.php', 'sekciya');
            makeRequestForView('get-data-db.php', 'sekciya');

            currentTable = 'sekciya';
        }
        else if (btn === btnTable[2]) {
            //Передвигаем линию
            hLine.style.marginLeft = 'calc(60% - (100%/5) + 4px)';

            //Делаем запрос на сервер
            makeRequestForView('get-head-table.php', 'sportsmen');
            makeRequestForView('get-data-db.php', 'sportsmen');

            currentTable = 'sportsmen';
        }
        else if (btn === btnTable[3]) {
            hLine.style.marginLeft = 'calc(80% - (100%/5) + 4px)';

            //Делаем запрос на сервер
            makeRequestForView('get-head-table.php', 'trener');
            makeRequestForView('get-data-db.php', 'trener');

            currentTable = 'trener';
        }
        else {
            hLine.style.marginLeft = 'calc(100% - (100%/5) + 4px)';

            //Делаем запрос на сервер
            makeRequestForView('get-head-table.php', 'zal');
            makeRequestForView('get-data-db.php', 'zal');

            currentTable = 'zal';
        }
    }
}

/*
 
    Следующий кусок кода нужен 
    для добавления полей в таблицу

 */

const tableHeadersInForm = document.querySelector('.table-headers');
const btnOpenForm = document.querySelector('#open-form');

function makeRequestForForm(table) {
    let request = new XMLHttpRequest();

    function getHeaderForForm() {
        if (request.readyState === 4) {
            let status = request.status;
    
            if (status === 200) {
                tableHeadersInForm.innerHTML = request.responseText;
            }
        }
    }

    let url = 'http://SportComplex.ru:81/php-scripts/get-head-table.php?table=' + table;

    request.open('GET', url);
    request.onreadystatechange = getHeaderForForm;
    request.send();
}

let rusNameTable = {
    'inventar': 'инвентарь',
    'sekciya': 'секции',
    'sportsmen': 'спортсмены',
    'trener': 'тренеры',
    'zal': 'залы',
}

btnOpenForm.addEventListener('click', () => {
    if (!formActive) {
        const fHeader = document.querySelector('.f-header');
        fHeader.innerText = 'Добавить поле в таблицу: ' + rusNameTable[currentTable];

        makeRequestForForm(currentTable);

        const valueContainer = document.querySelector('.values-container');

        let countColumns = 0;

        if (currentTable === 'inventar' || currentTable === 'zal') countColumns = 5;
        else if (currentTable === 'sekciya' || currentTable === 'trener') countColumns = 6;
        else countColumns = 7;

        //Добавляем необходимое кол-во input'ов
        for (let i = 0; i < countColumns; i++) {
            let input = document.createElement('input');
            input.className = 'value-input';
            valueContainer.appendChild(input);
        }

        const form = document.querySelector('.form');
        form.classList.add('active');

        formActive = true;
        formAction = 'insert';
    }
});

const btnCloseForm = document.querySelector('#close-form');

btnCloseForm.addEventListener('click', () => {
    const valueContainer = document.querySelector('.values-container');
    valueContainer.innerHTML = '';

    const form = document.querySelector('.form');
    form.classList.remove('active');

    formActive = false;
    formAction = null;
});

function requestForAddField(insertData, table) {
    let request = new XMLHttpRequest();

    function addField() {
        if (request.readyState === 4) {
            let status = request.status;
    
            if (status === 200) {
                //Удаляем все инпуты из формы
                const valueContainer = document.querySelector('.values-container');
                valueContainer.innerHTML = '';

                //Обновляем отображение таблицы
                makeRequestForView('get-data-db.php', table);
            }
        }
    }

    let data = 'insertData=' + insertData + '&table=' + table;
    let url = 'http://SportComplex.ru:81/php-scripts/add-field.php?' + data;

    request.open('GET', url);
    request.onreadystatechange = addField;
    request.send();
}

function requestForUpdateField(nameClmnId, idField, updateData, table) {
    let request = new XMLHttpRequest();

    function refreshView() {
        if (request.readyState === 4) {
            let status = request.status;
    
            if (status === 200) {
                //Удаляем все инпуты из формы
                const valueContainer = document.querySelector('.values-container');
                valueContainer.innerHTML = '';

                //Сбрасываем выбор мышью
                selectingRow = null;

                //Обновляем отображение таблицы
                makeRequestForView('get-data-db.php', table);
            }
        }
    }

    let data = 'table=' + table + '&nameClmn=' + nameClmnId + '&updateField=' + updateData + '&idField=' + idField;
    let url = 'http://SportComplex.ru:81/php-scripts/update-field.php?' + data;

    request.open('GET', url);
    request.onreadystatechange = refreshView;
    request.send();
}

const btnOk = document.querySelector('#ok');

btnOk.addEventListener('click', () => {
    const valueInput = document.querySelectorAll('.value-input');

    if (formAction === 'insert') {
        let insertData = [];

        for (let i = 0; i < valueInput.length; i++) {
            insertData.push("'" + valueInput[i].value + "'");
        }

        requestForAddField(insertData, currentTable);
    }
    else if (formAction === 'update') {
        let idField,
            nameClmnId,
            updateData = [];

        const tableHeaders = document.querySelector('.th-container');
        let hClmns = tableHeaders.children;

        for (let i = 0; i < valueInput.length; i++) {
            if (i === 0) {
                idField = valueInput[i].value;
                nameClmnId = hClmns[i].innerText;
            }
            else {
                updateData.push(hClmns[i].innerText + '=' + "'" + valueInput[i].value + "'");
            }
        }

        requestForUpdateField(nameClmnId, idField, updateData, currentTable);
    }

    const form = document.querySelector('.form');
    form.classList.remove('active');

    formActive = false;
});

/*
 
    Следующий кусок кода нужен 
    для удаления полей из таблицы

 */

function requestOnDelete(table, nameColumn, id) {
    let request = new XMLHttpRequest();

    function refreshView() {
        if (request.readyState === 4) {
            let status = request.status;
    
            if (status === 200) {
                //Обновляем отображение таблицы
                makeRequestForView('get-data-db.php', table);
            }
        }
    }

    let data = 'table=' + table + '&nameColumn=' + nameColumn + '&id=' + id;
    let url = 'http://SportComplex.ru:81/php-scripts/del-field.php?' + data;

    request.open('GET', url);
    request.onreadystatechange = refreshView;
    request.send();
}

 function selectRow(clickRow) {
    const activeRow = document.querySelector('.active-row');
    
    if (activeRow !== null) activeRow.classList.remove('active-row');
    clickRow.classList.add('active-row');

    selectingRow = clickRow;
 }

 const btnDelField = document.querySelector('#del-field');

 btnDelField.addEventListener('click', () => {
    if (selectingRow !== null) {
        const tableHeaders = document.querySelector('.th-container');

        let nameColumnId = tableHeaders.firstElementChild.innerText;

        requestOnDelete(currentTable, nameColumnId, selectingRow.firstChild.innerText);
    }
 });

 /*
 
    Следующий кусок кода нужен 
    для изменения полей таблицы

 */

 const btnChField = document.querySelector('#ch-field');

 btnChField.addEventListener('click', () => {
    if (selectingRow !== null) {
        const fHeader = document.querySelector('.f-header');
        fHeader.innerText = 'Изменить поле в таблице: ' + rusNameTable[currentTable];

        makeRequestForForm(currentTable);

        let countColumns = 0;

        if (currentTable === 'inventar' || currentTable === 'zal') countColumns = 5;
        else if (currentTable === 'sekciya' || currentTable === 'trener') countColumns = 6;
        else countColumns = 7;

        const valueContainer = document.querySelector('.values-container');
        
        //Добавляем необходимое кол-во input'ов
        for (let i = 0; i < countColumns; i++) {
            let input = document.createElement('input');
            input.className = 'value-input';
            input.value = selectingRow.children[i].innerText;
            valueContainer.appendChild(input);

            if (i === 0) input.setAttribute('disabled', '');
        }

        const form = document.querySelector('.form');
        form.classList.add('active');

        formActive = true;
        formAction = 'update';
    }
 });