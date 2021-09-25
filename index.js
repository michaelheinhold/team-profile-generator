const html = require('./src/html-layout');
const promptMembers = require('./src/prompt-members');
const fs = require('fs');

promptMembers()
    .then(data => {
        return html(data);
    })
    .then(pageHTML => {
        fs.writeFile('./dist/index.html', pageHTML, err =>{
            if (err) throw err;

            console.log('File created successfully!')
        })
    })