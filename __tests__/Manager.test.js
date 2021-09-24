const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('Checks to see if Manager has an office number property as well as all Employee props', () =>{
    const manager = new Manager('mike', 69, 'email', 420);

    expect(manager.office).toEqual(expect.any(Number));
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));

});

test('Checks if Manager role is overriden to return "Manager"', () =>{
    const manager = new Manager(420);

    expect(manager.getRole()).toBe('Manager');
})