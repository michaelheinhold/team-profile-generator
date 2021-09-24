const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('Checks that engineer has neccessary properties', () => {
    const engineer = new Engineer('mike', 69, 'email', 'github');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('Checks that engineer role is overridden to "Engineer"', () =>{
    const engineer = new Engineer('mike', 69, 'email', 'github');

    expect(engineer.getRole()).toEqual('Engineer');
});

test('checks that getSchool returns the correct school', () => {
    const engineer = new Engineer('mike', 69, 'email', 'github');

    expect(engineer.getGithub()).toEqual(engineer.github);
})