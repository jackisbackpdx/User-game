import makeUser from './make-user.js';
import { saveUser } from '../user-get-set.js';

const userSignUp = document.querySelector('form'); 
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const formData = new FormData(userSignUp);

    const user = makeUser(formData);

    saveUser(user);

    window.location = 'map';
});