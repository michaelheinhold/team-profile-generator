const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('Checks to see if intern has all properties', () => {
    const intern = new Intern('mike', 69, 'email', 'school');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('Checks that role is set to "Intern"', () =>{
    const intern = new Intern('mike', 69, 'email', 'school');

    expect(intern.getRole()).toEqual('Intern');
});

test('checks that getSchool is set to correct school', () => {
    const intern = new Intern('mike', 69, 'email', 'school');

    expect(intern.getSchool()).toEqual(intern.school);
});