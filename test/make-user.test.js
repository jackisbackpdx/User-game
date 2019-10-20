import makeUser from '../home/make-user.js';

const test = QUnit.test;
QUnit.module('make user');

test('create user object from form data', (assert) => {
    // arrange
    const formData = new FormData();
    formData.set('name', 'Playa');
    formData.set('character', 'link');

    const expected = {
        name: 'Playa',
        character: 'link',
        hp: 100,
        gold: 0,
        completed: {}
    };

    // act
    const user = makeUser(formData);

    // assert
    assert.deepEqual(user, expected);
});