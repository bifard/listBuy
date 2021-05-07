import {renderMainWindow} from './renderMainWindow.js'
export function renderVerRegWindow() {
    let verRegWindow = `<div class="window">
    <div class="verification_conteiner">
        <div class="nav">
            <img class="nav_img" src="img/previous.svg" alt="">
            <nav class="nav_nav">Главная</nav>
        </div>
        <div class="windowForm">
        </div>
    </div>
    </div>`;
    let rend = document.querySelector('.rend');
    rend.innerHTML = verRegWindow;

    let buttonReturn = document.querySelector('.nav_img');
    buttonReturn.addEventListener('click', () => {
        function deleteCookie ( cookie_name ){
            let cookie_date = new Date ( );  // Текущая дата и время
            cookie_date.setTime ( cookie_date.getTime() - 1 );
            document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
        }
        deleteCookie('id');
        renderMainWindow()
    })
}