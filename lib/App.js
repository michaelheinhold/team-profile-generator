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
            var cardWidth = '';
            var cardColor = '';
            switch (e.getRole()) {
                case "Manager":
                    field = `Office #: ${e.getOfficeNum()}`;
                    iconClass = `users`;
                    cardWidth = '6';
                    cardColor = 'bg-danger text-light';
                    break;
                case "Engineer":
                    field = `Github: <a href='https://github.com/${e.getGithub()}' target='_blank'>${e.getGithub()}</a>`;
                    iconClass = `cogs`;
                    cardWidth = '4';
                    cardColor = 'bg-primary text-light'
                    break;
                case "Intern":
                    field = `School: ${e.getSchool()}`;
                    iconClass = `user-graduate`;
                    cardWidth ='4';
                    cardColor = 'bg-secondary text-light'
                    break;
            }

            var cardScript = `
                <div class='col-${cardWidth} mt-3'>
                    <div class='card ${cardColor}'>
                        <div class='card-header fs-5'>
                            <div class='card-title fs-2'> ${e.getName()} </div>
                            ${e.getRole()} <i class="fas fa-${iconClass}"></i>
                        </div>
                        <ul class='list-group'>
                            <li class='list-group-item'>ID: ${e.getId()}</li>
                            <li class='list-group-item'>Email: <a href='mailto: ${e.getEmail()}'>${e.getEmail()}</a></li>
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