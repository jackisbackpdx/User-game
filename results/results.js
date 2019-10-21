import loadProfile from '../common/load-profile.js';
import { getUser } from '../user-get-set.js';
import { scoreHp } from './scorehp.js';
import scoreGold from './score-gold.js';
import { hpMessages, aliveMessage, deadMessage } from './messages.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const hpResult = scoreHp(user.hp);
const goldResult = scoreGold(user.gold);
const hpMessage = hpMessages[hpResult];

let goldMessages = null;
if (hpResult === 'dead') {
    goldMessages = deadMessage;
}
else {
    goldMessages = aliveMessage;
}

const goldMessage = goldMessages[goldResult];

let story = 'After your adventures, ';
story += user.name + ' the ' + user.character + ', ';
story += hpMessage + ' and ' + goldMessage + '.';

storyDisplay.textContent = story;