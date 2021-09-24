const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('checks to see if the emplyee object has necessary data', () => {
    const employee = new Employee('Mike', 69, 'email@email');

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('checks name of employee', () =>{
    const employee = new Employee('Mike', 69, 'email@email');

    expect(employee.getName()).toEqual(employee.name);
});

test('checks email of employee', () =>{
    const employee = new Employee('Mike', 69, 'email@email');

    expect(employee.getEmail()).toBe(employee.email);
});

test('checks that employee role is "Employee"', () =>{
    const employee = new Employee('Mike', 69, 'email@email');

    expect(employee.getRole()).toEqual('Employee');
});