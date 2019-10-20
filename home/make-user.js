function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        character: formData.get('character'),
        hp: 100,
        gold: 0,
        completed: {}
    };
    return user;
}

export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    character: formData.get('character'),
    hp: 100,
    gold: 0,
    completed: {}
});

export default makeUser;