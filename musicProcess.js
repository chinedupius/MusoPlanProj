const prompt = require('prompt-sync')({ sigint: true }); // Import prompt-sync for synchronous CLI prompts
const fs = require('fs'); // Import fs for file system operations
const { Guitarist, Bassist, Percussionist, Flautist } = require('./musicians'); // Import musician types from musicians module
const Troupe = require('./troupe'); // Import the Troupe class

let musicians = []; // Array to store created musician objects
let troupes = [];   // Array to store created troupe objects

function createMusician(musicianName, musicianType, musicianYearsPlaying, musicianHourlyRate) {
    //const name = prompt("Enter musician's name: ");
    //const type = prompt("Enter musician's type (Guitarist/Bassist/Percussionist/Flautist): ");
    //const yearsPlaying = parseInt(prompt("Enter years of playing: "), 10);
    //const hourlyRate = parseFloat(prompt("Enter hourly rate (50 or over): "));

    const name = musicianName;
    const type = musicianType;
    const yearsPlaying = musicianYearsPlaying;
    const hourlyRate = musicianHourlyRate;

    let musician;
    switch (type.toLowerCase()) {
        case 'guitarist':
            musician = new Guitarist(name, ['guitar'], yearsPlaying, hourlyRate);
            break;
        case 'bassist':
            musician = new Bassist(name, ['bass'], yearsPlaying, hourlyRate);
            break;
        case 'percussionist':
            musician = new Percussionist(name, ['drums'], yearsPlaying, hourlyRate);
            break;
        case 'flautist':
            musician = new Flautist(name, ['flute'], yearsPlaying, hourlyRate);
            break;
        default:
            //console.log('Invalid musician type.');
            throw new Error('Invalid musician type.');            
    }
    musicians.push(musician); // Add the created musician to the musicians array
    return(`Musician created: Name - ${name},\n Type - ${type}, Years Playing - ${yearsPlaying}\n, Hourly Rate - ${hourlyRate}`);
    //return musician;
}

function createTroupe(name, genre, minimumDuration) {
    //const name = prompt("Enter troupe's name: ");
    //const genre = prompt("Enter troupe's genre (Rock/Jazz/Pop): ");
    //const minimumDuration = parseFloat(prompt("Enter minimum duration for booking (in hours): "));

    //const troupe = new Troupe(name, genre.toLowerCase(), minimumDuration);
    //troupes.push(troupe); // Add created troupe to the troupes array
    //console.log(`1. Troupe created: Name - ${name},\n 2. Genre - ${genre},\n 3. Minimum Duration - ${minimumDuration} hours`);
    //return troupe;
    
    return(`1. Troupe created: Name - ${name},\n 2. Genre - ${genre},\n 3. Minimum Duration - ${minimumDuration} hours`);
}

function addMusicianToTroupe() {
    if (musicians.length === 0) {
        //console.log("No musicians available.");
        //return;
        return("No musicians available.");
    }
    if (troupes.length === 0) {
        //console.log("No troupes available.");
        //return;
        return("No troupes available.");
    }

    console.log("Select a Musician:");
    musicians.forEach((musician, index) => {
        console.log(`${index + 1}: ${musician.name}`);
    });
    const musicianIndex = parseInt(prompt("Enter the number of the musician: ")) - 1;

    console.log("Select a Troupe:");
    troupes.forEach((troupe, index) => {
        console.log(`${index + 1}: ${troupe.name}`);
    });
    const troupeIndex = parseInt(prompt("Enter the number of the troupe: ")) - 1;

    if (musicianIndex >= 0 && musicianIndex < musicians.length && troupeIndex >= 0 && troupeIndex < troupes.length) {
        troupes[troupeIndex].addMember(musicians[musicianIndex]);
        //console.log(`Added this ${musicians[musicianIndex].name} Musician to this ${troupes[troupeIndex].name} Troupe.`);
        return(`Added this ${musicians[musicianIndex].name} Musician to this ${troupes[troupeIndex].name} Troupe.`);
    } else {
        console.log("Invalid selection.");
    }
}

function showCostPerHour() {
    if (troupes.length === 0) {
        console.log("No troupes available. Please create a troupe first.");
        return;
    }

    console.log("Available Troupes:");
    troupes.forEach((troupe, index) => {
        console.log(`${index + 1}. ${troupe.name}`);
    });
    const troupeIndex = parseInt(prompt("Select the troupe number to calculate cost for: ")) - 1;
    const hours = parseFloat(prompt("Enter the number of hours: "));

    if (troupeIndex >= 0 && troupeIndex < troupes.length && !isNaN(hours)) {
        const cost = troupes[troupeIndex].calculateCost(hours);
        //console.log(`Total cost for ${hours} hours: $${cost}`);
        console.log(cost);
    } else {
        console.log("Invalid selection.");
    }

}

function exportTroupeNames(filename) {
    const names = troupes.map(troupe => troupe.name).join('\n');
    fs.writeFileSync(filename, names, 'utf8');
    //return
    console.log(`Troupe names exported to ${filename}`);
}

function importTroupeNames(filename) {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        const names = data.split('\n');
        names.forEach(name => {
            const troupe = new Troupe(name, 'pop', 1); // Default values for genre and minimumDuration
            troupes.push(troupe);
        });
        console.log(`Imported Troupe Names from ${filename}:`, names);
    } catch (error) {
        console.error("Failed to import troupe names:", error.message);
    }
}

function showTroupeSummary() {
    troupes.forEach(troupe => {
        console.log(troupe.troupeSummary());
    });
}

function showTroupeDetails() {
    troupes.forEach(troupe => {
        console.log(troupe.troupeDetails());
    });
}

module.exports = { createMusician, createTroupe, addMusicianToTroupe, exportTroupeNames, importTroupeNames, showTroupeSummary, showTroupeDetails, showCostPerHour };