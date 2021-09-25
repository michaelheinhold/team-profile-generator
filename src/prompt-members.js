const inquirer = require("inquirer");
const engineerQuestions =require('./engineerQuestions');
const internQuestions =require('./internQuestions');
const managerQuestions =require('./managerQuestions');

promptMembers = teamData => {
    if(!teamData){
        const teamData = [];
        return managerQuestions()
        .then(newMember =>{
            teamData.push(newMember);
        })
        .then(()=> {
            return promptMembers(teamData);
        })
    }
    if(teamData[teamData.length-1].addMembers === 'Engineer'){
        return inquirer.prompt(engineerQuestions)
        .then(newMember => {
            teamData.push(newMember);
        })
        .then(()=>{
            return promptMembers(teamData);
        });
    } else if (teamData[teamData.length-1].addMembers === 'Intern'){
        return inquirer.prompt(internQuestions)
        .then(newMember => {
            teamData.push(newMember);
        })
        .then(()=>{
            return promptMembers(teamData);
        });
    } else  if (teamData[teamData.length-1].addMembers === 'Finish building my team'){
        return teamData;
    }
};

module.exports = promptMembers;