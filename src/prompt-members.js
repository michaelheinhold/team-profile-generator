const inquirer = require("inquirer");
const engineerQuestions =require('./engineerQuestions');
const internQuestions =require('./internQuestions');
const managerQuestions =require('./managerQuestions');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

promptMembers = teamData => {
    console.log(teamData);
    if(!teamData){
        const teamData = [];
        return managerQuestions()
        .then(data =>{
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber, data.addMembers);
            teamData.push(manager);
        })
        .then(()=> {
            return promptMembers(teamData);
        })
    }
    if(teamData[teamData.length-1].addMembers === 'Engineer'){
        return inquirer.prompt(engineerQuestions)
        .then(data => {
            const newEngineer = new Engineer(data.name, data.id, data.email, data.github, data.addMembers);
            teamData.push(newEngineer);
        })
        .then(()=>{
            return promptMembers(teamData);
        });
    } else if (teamData[teamData.length-1].addMembers === 'Intern'){
        return inquirer.prompt(internQuestions)
        .then(data => {
            const newIntern = new Intern(data.name, data.id, data.email, data.school, data.addMembers);
            teamData.push(newIntern);
        })
        .then(()=>{
            return promptMembers(teamData);
        });
    } else  if (teamData[teamData.length-1].addMembers === 'Finish building my team'){
        return teamData;
    }
};

module.exports = promptMembers;