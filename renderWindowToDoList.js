import {renderToDoList} from './renderToDoList.js'
export function renderWindowToDoList() {
    let toDoList = `<div class="main">
        <h1>Покупки</h1>
        <div class="toDo-item">
            <div class="item_id"></div>
            <div class="item_true" style="opacity: 0;">
                <input class="checkbox" type="checkbox" name="" id="">
                <label for="" class="labelForCheckbox"></label>
            </div>
            <div class="item_text"></div>
            <div class="conteiner_price">
                <div class="text_price">Цена :</div>
            </div>
            <div class="conteiner_lot">
                <div class="text_lot"> Кол-во : </div>
            </div>
            <button class="item_delet" style="opacity: 0;"></button>
        </div>

        <div class="list-toDo">
        
        </div>
    
        <div class="conteiner_form">
            <div class="conteiner_input">
            <input class="summ"></input>
        </div>
        
            <form class="form-toDo"  id="form-toDo">
                <input  class="toDo-new-item-text" type="text" required placeholder="Что покупаем?">
                <input class="send-new-item" form="form-toDo" type="submit">
            </form>
        </div>
    </div>`;

    let windowForm = document.querySelector('.windowForm')
    windowForm.innerHTML = toDoList
    renderToDoList();
}