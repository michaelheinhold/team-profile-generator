const configureCards = data => {
    // const manager = data.filter(name => name.includes('Manager'));
    // const engineers = data.filter(name => name.includes('Engineer'));
    // const interns = data.filter(name => name.includes('Intern'));

    data.forEach(member =>{
        console.log(member);
        return `
        <div class='col-4 card'>
            <div class='card-header'>
                <div class='card-title'>${member.getName()}</div>
                ${member.getRole()}
            </div>
            <ul class='list-group'>
                <li class='list-group-item>ID: ${member.id}</li>
                <li class='list-group-item>Email: ${member.getEmail()}</li>

            </ul>
        </div>
        `
        // <li class='list-group-item>Office Number: ${member.office}</li>
    })

    // engineers.forEach(member => {
    //     return `
    //     <div class='col-4 card'>
    //         <div class='card-header'>
    //             <div class='card-title'>${member.name}</div>
    //             ${member.getRole()}
    //         </div>
    //         <ul class='list-group'>
    //             <li class='list-group-item>ID: ${member.id}</li>
    //             <li class='list-group-item>Email: ${member.email}</li>
    //             <li class='list-group-item>GitHub: ${member.github}</li>
    //         </ul>
    //     </div>
    //     `
    // })
    
    // interns.forEach(member => {
    //     return `
    //     <div class='col-4 card'>
    //         <div class='card-header'>
    //             <div class='card-title'>${member.name}</div>
    //             ${member.getRole()}
    //         </div>
    //         <ul class='list-group'>
    //             <li class='list-group-item>ID: ${member.id}</li>
    //             <li class='list-group-item>Email: ${member.email}</li>
    //             <li class='list-group-item>School: ${member.school}</li>
    //         </ul>
    //     </div>
    //     `
    // })
}

module.exports = configureCards;
