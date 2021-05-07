export function renderToDoList() {
    let listToDo = document.querySelector('.list-toDo')
    let toDoItemTemplate = document.querySelector('#toDo-item_template').content;
    let toDoItem = toDoItemTemplate.querySelector('.toDo-item');
    let toDoNewItemText = document.querySelector('.toDo-new-item-text');

    // Function для работы с Cookie
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }
    /* Определяем файл для обработки */
    let getAction = function (action) {
        if(action == 'getAllList'){
            return 'getAllList.php'
        }
        if(action == 'removePrice'){
            return 'price.php'
        }
        if(action == 'removeBoolenTrue'){
            return 'boolenTrue.php'
        }
        if(action == 'removeBoolenFalse'){
            return 'boolenFalse.php'
        }
        if(action == 'addElemToList'){
            return 'addElemToList.php'
        }
        if(action == 'delet'){
            return 'deletItem.php'
        }
        if(action == 'lot'){
            return 'lot.php'
        }
    }
    /* функция запросов к бд */
    let getListFromBD = function(action, transformObj) {
        let nameAction = getAction(action);
        let cookie = getCookie("id");
        if(transformObj) {
            transformObj['userId'] = cookie;
        }else {
            transformObj = {
                userId : cookie,
            }
        }
        
        let request = new XMLHttpRequest();
        request.open('POST', nameAction, true);
        request.responseType = 'json';
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        
        request.addEventListener('readystatechange', function() {
            if ((request.readyState==4) && (request.status==200)) {
                let arrElemList = request.response;
                if(arrElemList){
                    renderList(arrElemList);
                }     
            }
        });
        request.send(JSON.stringify(transformObj));
    };

    /* Функция для проверки наличия элемента в DOM */
    let checkedHaveElemToArr = function(elem,arr) {
        let objElems = arr.children;
        for(let objElem of objElems){
            let a = objElem.querySelector('.item_id');
            if (a.textContent == elem){
                return objElem;
            }
        } 
    }

    /* Функция отрисовки списка */
    let renderList = function (arrData) {
        for(let data of arrData) {
            if(checkedHaveElemToArr(data.id, listToDo )) {
                let objElem = checkedHaveElemToArr(data.id, listToDo );
                let itemPrice = objElem.querySelector('.input_price');
                let itemLot = objElem.querySelector('.input_lot');
                itemPrice.value = data.price;
                itemLot.value = data.lot;
            }else {
                let elemList = toDoItem.cloneNode(true);
                let itemId = elemList.querySelector('.item_id');
                let itemText = elemList.querySelector('.item_text');
                let itemDelet = elemList.querySelector('.item_delet');
                let itemBoolen = elemList.querySelector('.item_true');
                let itemPrice = elemList.querySelector('.input_price');
                let itemLot = elemList.querySelector('.input_lot');
                let checkbox = itemBoolen.querySelector('.checkbox');
                let inputCheckbox = itemBoolen.querySelector('.labelForCheckbox');
                
                itemId.textContent = data.id;
                checkbox.id = data.id;
                inputCheckbox.setAttribute('for', data.id);
                itemText.textContent = data.nameBuy;
                itemPrice.value = data.price;
                itemLot.value = data.lot;

                if(data.boolen == 1){
                    checkbox.checked = true;
                    elemList.classList.add('true');
                }
                let objDoomElem = {
                    id : itemId.textContent,
                    text :  itemText.textContent,
                    price : itemPrice.value,
                    lot : itemLot.value,

                    removePrice : itemPrice.addEventListener('change', function() {
                        objDoomElem.price = itemPrice.value;
                        getListFromBD('removePrice', objDoomElem )
                    }),
                    removeLot : itemLot.addEventListener('change', function() {
                        objDoomElem.lot = itemLot.value;
                        console.log(objDoomElem.lot);
                        getListFromBD('lot', objDoomElem )
                    }),

                    checkedBoolen : checkbox.addEventListener('change', function(){
                        if(checkbox.checked) {
                            elemList.classList.add('true')
                            getListFromBD('removeBoolenTrue', objDoomElem )
                        }else {
                            elemList.classList.remove('true')
                            getListFromBD('removeBoolenFalse', objDoomElem )
                        }
                    }),

                    delet : itemDelet.addEventListener('click', function() {
                        elemList.remove();
                        getListFromBD('delet', objDoomElem )
                    }),

                    

                }

                listToDo.appendChild(elemList);
            }          
        }
        let allPrice = document.querySelectorAll('.input_price');
        let allLot = document.querySelectorAll('.input_lot');
        let summ = document.querySelector('.summ');
        summ.value = 0;
        for(let i = 0; i < allPrice.length; i++) {
            summ.value = Number(summ.value) + (Number(allPrice[i].value) * Number(allLot[i].value));
        } 
    }

    /* Событие отправки нового элемента списка */
    let submit = document.querySelector('.send-new-item');
    submit.addEventListener('click', function(evt) {
        evt.preventDefault();
        if(toDoNewItemText.value) {
            let objDoomElem = {
                text : toDoNewItemText.value,
            }
            getListFromBD('addElemToList',objDoomElem);
            toDoNewItemText.value = '';
        }
        
    })

    getListFromBD('getAllList');
}