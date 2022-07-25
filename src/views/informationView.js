// import { userSatate, publicationsOfCurrentUser, getDocUser } from '../lib/firebase.js'

function informationView() {
  const information = `
    <main class="infornation-view">
    <div class="information-header">
      <button class="button-back">
          <img src='./imgs/back.png'>
      </button>
      <h1 class="pet-name"></h1>
      <div class="buttons-group">
        <button class="button-trash">
            <img src='./imgs/trash.png'>
        </button>
        <button class="button-edit">
            <img src='./imgs/edit.png'>
        </button>
      </div>
    </div>
      <div class="publication-information"></div>
      <div class="div-buttons">
           <button class="button-love">
             <img src="./imgs/love.png">
           </button>
           <button class="button-adopt">
             <img src="./imgs/logo-buttonAdopt.png">Adoptar
           </button>
      </div>
    </main>
    <footer>
        <div class="container__footer-info">
            <div class="container__developers-info">
                <p class="developers-info__title">© Todos los derechos reservados</p>
                <p>diseño : @Joselyn Condori - @Diana Llerena</p>
                <p>developers : @Joselyn Condori - @Diana Llerena </p>
            </div>
            <img class="imageFooter" src="./imgs/footer-logo.png"/>
        </div>
    </footer>
    `;

  const element = document.querySelector('body');
  element.innerHTML = information;
  const backHomeButton = element.querySelector('.button-back');
  backHomeButton.addEventListener('click', () => { window.location.hash = '#/home'; });
  const editPublication = element.querySelector('.button-edit');

  editPublication.addEventListener('click', () => {
    const name = element.querySelector('.pet-name');
    sessionStorage.setItem('petName', name.innerText);
    window.location.hash = '#/edit';
  });

  return element;
}
export { informationView };
