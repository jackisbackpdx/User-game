import { getUser } from '../user-get-set.js';
import isDead from './is-dead.js';

function loadProfile() {
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');

    const user = getUser();

    if (!user) {
        window.location = './';
    }

    name.textContent = user.name;
    avatar.src = '../assets/' + user.character + '.gif';
    gold.textContent = user.gold;

    if (isDead(user)) {
        hp.textContent = 'Death has fallen upon you, may the reaper be ever so merciful on your soul';
    } else {
        hp.textContent = user.hp;
    }
}

export default loadProfile;