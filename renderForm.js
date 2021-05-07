import {renderWindowToDoList} from './renderWindowToDoList.js'
export function renderForm(h,nameButton,method) {
    let arrElemList;
    let form = `<div class="reg">
    <div class="reg_h1"> ${h} </div>
        <form class="registration form_form">
            <div class="coneiner_input">
                <input id="registr_name" class="registr_name input_form" type="text" required>
                <label for="registr_name" class="text_placeholder">Name</label>
            </div>
            <div class="coneiner_input">
                <input id="registr_pass" class ="registr_pass input_form" type="password" required >
                <label for="registr_pass" class="text_placeholder">Passowrd</label>
            </div>
                       
            <button class="registration_submit form_submit" type="submit" >${nameButton}</button>
        </form> 
    </div>`;
    let windowForm = document.querySelector('.windowForm')
    windowForm.innerHTML = form

    let buttonForm = document.querySelector('.form_submit')
    buttonForm.addEventListener('click', (evt) => {
        //отключаем дефолт действие
        evt.preventDefault();
        // Создаем function запроса
        let toLogIn = function(action, formObj) {
            let nameAction = action;
            let request = new XMLHttpRequest();
            request.open('POST', nameAction, true);
            request.responseType = 'json';
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            
            request.addEventListener('readystatechange', function() {
                if ((request.readyState==4) && (request.status==200)) {
                    arrElemList = request.response;
                    if(nameAction == 'verification.php') {
                        if(arrElemList.id && arrElemList.name){
                            let cookie =  "id =" + arrElemList.id;
                            document.cookie = cookie;
                            renderWindowToDoList()
                            /* dellAllListToDoom();
                            getListFromBD('getAllList'); */
                          }
                    }else {
                        alert(`Аккаунт создан`)
                        renderForm('Авторизация','Войти','verification.php')
                    }   
                }
            });
            request.send(JSON.stringify(formObj));
        };

        let inputNameReg = document.querySelector('.registr_name');
        let inputPassReg = document.querySelector('.registr_pass'); 
        let user = {
            name : inputNameReg.value,
            pass : inputPassReg.value,
        }
        toLogIn(method, user); 
    })
}
