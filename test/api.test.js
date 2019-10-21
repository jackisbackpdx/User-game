import { getUser, saveUser } from '../user-get-set.js';

const test = QUnit.test;

QUnit.module('user api');

QUnit.testStart(() => {
    window.localStorage.clear();
});

test('saveUser sets user and returns on getUser, same object key-values from local storage', (assert) => {

    const user = { 
        name: 'Leef',
        character: 'spirit',
        hp: 23.87,
        gold: 1000000
    };

    saveUser(user);
    const result = getUser();


    assert.deepEqual(result, user);
});