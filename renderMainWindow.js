import {renderVerRegWindow} from './renderVerRegWindow.js'
import {renderForm} from './renderForm.js'
export function renderMainWindow(){
    let rend = document.querySelector('.rend');

    let mainWindow = `<div class="main_window">
    <img class="window_img" src="img/Group 17.svg" alt="">
    <div class="window_conteiner">
        <h1 class="window_h1">Моя корзина</h1>
        <p class="window_p">составь список необходимого вместе со мной</p>
        <div class="window_conteiner-button">
            <button class="button_main_window verific">Вход</button>
            <button class="button_main_window registr">Регистрация</button>
        </div>
    </div> 
    </div>`
    rend.innerHTML = mainWindow;
    let verific = document.querySelector('.verific');
    verific.addEventListener('click', () => {
        renderVerRegWindow()
        renderForm('Авторизация','Войти','verification.php')
    })
    let registr = document.querySelector('.registr');
    registr.addEventListener('click', () => {
        renderVerRegWindow()
        renderForm('Регистрация','Регистрация','registration.php')
    })
}