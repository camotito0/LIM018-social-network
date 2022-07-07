function signUp () {
    const signup = `
    <img class="background" src="./icons/mobile-createA.png" />
    <main class="main-form">
        <h1>Crear cuenta</h1>
        <p>Por favor llene los datos antes de continuar.</p>
        <form   class="form">
            <div class="form-input" >
                <img src="./icons/user.png"/>
                <input class="username" name="username" type="text" placeholder="nombre de usuario" required>
            </div>
            <span class="form-alert correct-username">El nombre de usurio es válido</span>
            <span class="form-alert incorrect-username ">El nombre de usurio no es válido</span>

            <div class="form-input">
                <img src="./icons/email.png"/>
                <input class="email" type="email" placeholder="email" required>
            </div>
            <span class="form-alert correct-mail">El email es válido</span>
            <span class="form-alert incorrect-mail">El email no es válido</span>

            <div class="form-input">
                <img src="./icons/key.png"/>
                <input class="password" name="password" type="password" placeholder="contraseña" required>
            </div>
            <span class="form-alert correct-password">La contraseña es válida</span>
            <span class="form-alert incorrect-password">La contraseña debe contener al menos 4 caracteres y como máximo 12</span>

            <button class="form-button create-account" type="button">Crear cuenta</button>
            <a href="/" class="form-link" >tienes cuenta?</a>
        </form>
    </main>
    `

    const element = document.querySelector('body');
    element.innerHTML = signup;

    //vamos a usar regex para validar los inputs del formulario
    const regex = {
        'userR': /^[a-zA-Z0-9\_\-]{4,16}$/, //letras (mayus, minus), numeros, guion y guion bajo - de 4 a 16 caracteres
        'mailR':  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // letras (mayus, minus), guion bajo antes de numeros, cadena de texto que precede al arroba y
        //al punto, después del punto cadena de caracteres
        'passwordR': /^.{4,12}$/, // caulquier tipo de caracter - de 4 a 12 caracteres
    }

    const saveData = () => {
        const username = element.querySelector('.username').value;
        const mail = element.querySelector('.email').value;
        const password = element.querySelector('.password').value;
        validateInput(username, 'userR', 'username')
        validateInput(mail, 'mailR', 'mail')
        validateInput(password, 'passwordR', 'password')
    }

    element.querySelector('.create-account').addEventListener('click', saveData )


    const validateInput = (input, type, campo) => {
        if(regex[`${type}`].test(input)){
            console.log('está bien')
            element.querySelector(`.incorrect-${campo}`).style.display = 'none'
            element.querySelector(`.correct-${campo}`).style.display = 'flex'
        } else {
            console.log('esta mal')
            element.querySelector(`.incorrect-${campo}`).style.display = 'flex'
            element.querySelector(`.correct-${campo}`).style.display = 'none'
        }
    }

    /* const sendData = () => {
    
    } */

    return element;
}

export { signUp };