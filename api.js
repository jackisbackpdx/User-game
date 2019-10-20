const dungeon = {
    id: 'Dungeon',
    title: 'Dungeon of Monsters',
    map: {
        top: '89%',
        left: '44%',
    },
    image: './assets/dungeon.jpg',
    audio: '',
    action: '',
    description: `
        You enter an unknown dungeon to hunt a treasure, but there are quite a few evil serpents 
        guarding the treasure.
    `,
    choices: [
        {
            id: 'leave',
            description: 'You exit the dungeon',
            result: 'You don\'t get the tresure, you must find anouther source of gold.',
            hp: 0,
            gold: 0,
        },
        {
            id: 'sneak',
            description: `You sneak past the enemies`,
            result: `You decide to sneak past the serpents, and reach the treasure and exit
            unnoticed.`,
            hp: 50,
            gold: 45
        },
        {
            id: 'attack',
            description: `You rush the serpents useing steel and magic`,
            result: `You defeat the serpents and reach the tresure, also,
             you looted the dungeon. During your battles, you received a damaging blow to 
             the midsection, and are wounded.`,
            hp: -45,
            gold: 90
        }]
};

const skyWorld = {
    id: 'sky world',
    title: 'SkyWorld',
    map: {
        top: '57%',
        left: '67%',
    },
    image: './assets.cloudworld.jpg',
    audio: '',
    action: '',
    description: `
        You step on a wind tunnel that dransports
         you up into the clouds. You are able to walk using your wind shoes
    `,
    choices: [
        {
            id: 'Start jumping around on cloud',
            description: `You fall off the cloud`,
            result: `Walking on clouds is very different from 
            walking on the ground, you take a wrong step and fall off the edge of the cloud`,
            hp: -100,
            gold: 0
        },
        {
            id: 'Search for the element',
            description: 'You continue to search for the stolen gem',
            result: 'You find the gem and defeat the guardian of the gem',
            hp: -25,
            gold: 75
        },
        {
            id: 'Find something else cool and call it good',
            description: `You see a similar gem to the one that you're looking for, you think "This is probably close enough"`,
            result: 'It was not "good enough", and the valley continues to succumb to evil forces',
            hp: 0,
            gold: 10
        }]
};

const digitalWorld = {
    id: 'Digital World',
    title: 'Digital World',
    map: {
        top: '31%',
        left: '5%',
    },
    image: './grid.jpg',
    audio: 'pacman_x.wav',
    action: 'Metroid_Door-Brandino480-995195341.wav',
    description: 'You now live only in the digital world, Big Data got you.',
    choices: [
        {
            id: 'Stay Online',
            description: 'You decide you want to live in the digital world forever.',
            result: `You never leave and live forever as long as there is a running computer with internet access`,
            hp: 'unlimited',
            gold: 'unlimited'
        },
        {
            id: 'Find a way back to the real world',
            description: 'You look for a way back to the real world',
            result: 'You find the reverse compiler and earn some money',
            hp: 0,
            gold: 20
        },
        {
            id: 'Explore',
            description: 'Facinated by the grid world, you decide to explore this unknown place',
            result: `You find some gold, but you stub your digital toe on an array. Eventually you find the
             reverse compiler and get back to the real world.`,
            hp: -20,
            gold: 75
        }]
};

const quests = [dungeon, skyWorld, digitalWorld];

export default quests;