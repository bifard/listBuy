import {renderMainWindow} from './renderMainWindow.js';
import {renderWindowToDoList} from './renderWindowToDoList.js'
import {renderVerRegWindow} from './renderVerRegWindow.js'
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
if(getCookie("id")) {
    renderVerRegWindow()
    renderWindowToDoList()
}else {
    renderMainWindow();
}

