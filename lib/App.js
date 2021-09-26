const inquirer = require('inquirer');
const promptMembers = require('../src/prompt-members');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const fs =require('fs');

class App {
    constructor(){

        this.employees =[];

        this.employeePrompt= promptMembers;

    }

    start() {
        this.newEmployee();
    }

    newEmployee() {
        inquirer.prompt(this.employeePrompt).then(data => {
            switch (data.role){
                case 'Finish building my team':
                    this.renderHTML();
                    console.log('Team Profile Generated');
                    break;
                case 'Manager':
                    this.employees.push(new Manager(data.name, data.id, data.email, data.officeNum));
                    this.newEmployee();
                    break;
                case 'Engineer':
                    this.employees.push(new Engineer(data.name, data.id, data.email, data.github));
                    this.newEmployee();
                    break;
                case 'Intern':
                    this.employees.push(new Intern(data.name, data.id, data.email, data.school));
                    this.newEmployee();
                    break;
            }
        });
    }

    renderHTML() {
            fs.readFile('./src/template.html', 'utf8', (err, newHTML)=>{
                if(err) throw err;
                newHTML = newHTML.split('<input>').join(this.getCards());

                fs.writeFile('./dist/index.html', newHTML, err => {
                    if(err) throw err;

                    console.log('Profile Generated! Check the "dist" folder for the results!')
                });
            });
    }

    getCards() {
        var cards = ``;
        this.employees.forEach(e => {
            var field = "";
            var iconClass = "";
            switch (e.getRole()) {
                case "Manager":
                    field = `Office #: ${e.getOfficeNum()}`;
                    iconClass = `users`;
                    break;
                case "Engineer":
                    field = `Github: ${e.getGithub()}`;
                    iconClass = `cogs`;
                    break;
                case "Intern":
                    field = `School: ${e.getSchool()}`;
                    iconClass = `user-graduate`;
                    break;
            }

            var cardScript = `
            <div class='col-4'>
                <div class='card'>
                    <div class='card-header'>
                        <div class='card-title'> ${e.getName()} </div>
                        ${e.getRole()} <i class="fas fa-${iconClass}">
                    </div>
                    <ul class='list-group'>
                        <li class='list-group-item'>ID: ${e.getId()}</li>
                        <li class='list-group-item'>Email: ${e.getEmail()}</li>
                        <li class='list-group-item'>${field}</li>
                    </ul>
                </div>
            </div>
            `
            cards += cardScript;

        });
        return cards;
    }
}

module.exports =App;