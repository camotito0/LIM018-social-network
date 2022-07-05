//aquí nuestros imports
//import changeView from './controller/viewControler.js'

import changeView from './controller/viewControler.js';

// aquí inicializamos window

function currentWindowPath() {
    window.addEventListener('hashchange', () => changeView(window.location.hash))
}

window.addEventListener('load', currentWindowPath)