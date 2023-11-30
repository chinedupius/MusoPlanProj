const prompt = require('prompt-sync')({ sigint: true });
const { createMusician, createTroupe, addMusicianToTroupe, showCostPerHour, exportTroupeNames, importTroupeNames, showTroupeSummary, showTroupeDetails } = require('./musicProcess');

function showMenu() {
    console.log('=====================================');
    console.log('MusoPlan Software Management System');
    console.log('=====================================');
    console.log('1. Create a Musician');
    console.log('2. Create a Troupe');
    console.log('3. Add Musician to Troupe');
    console.log('4. Show Cost per hour');
    console.log('5. Export Troupe Names');
    console.log('6. Import Troupe Names');
    console.log('7. Summary Troupe Info');
    console.log('8. Detailed Troupe Info');
    console.log('9. Exit the program');
    console.log('=====================================');

    const choice = prompt('Enter your choice (1-9): ');
    return parseInt(choice, 10);
}

function main() {
    let exit = false;
    while (!exit) {
        const choice = showMenu();
        switch (choice) {
            case 1:
                createMusician();
                break;
            case 2:
                createTroupe();
                break;
            case 3:
                addMusicianToTroupe();
                break;
            case 4:
                showCostPerHour();
                break;
            case 5:
                const exportFilename = prompt("Enter filename to export to: ");
                exportTroupeNames(exportFilename);
                break;
            case 6:
                const importFilename = prompt("Enter filename to import from: ");
                importTroupeNames(importFilename);
                break;
            case 7:
                showTroupeSummary();
                break;
            case 8:
                showTroupeDetails();
                break;
            case 9:
                exit = true;
                console.log("Thank you for using MusoPlan Software Management System!");
                break;
            default:
                console.log('Invalid choice, please enter a number between 1 and 9.');
        }
    }
}

main();