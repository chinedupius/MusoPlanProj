// Class representing a musical troupe with properties like name, genre, duration, and musicians
class Troupe {

    // method to add members to troupe member array
    constructor(name, genre, minimumDuration) {
        // Initialize troupe properties
        this.name = name;
        this.genre = genre;
        this.minimumDuration = minimumDuration;
        this.musicians = [];
        this.troupeMembers = []; // New array for troupe members


        // Validate troupe name length
        if (name.length < 3 || name.length > 30) {
            throw new Error('Troupe name must be between 3 and 30 characters.');
        }

        // Validate genre
        if (!['rock', 'jazz', 'pop'].includes(genre)) {
            throw new Error('Invalid genre. Must be rock, jazz, or pop.');
        }

        // Validate minimum duration
        if (minimumDuration < 0.5 || minimumDuration > 3) {
            throw new Error('Minimum duration must be between 0.5 and 3 hours.');
        }
    }

    // Method to add a musician to the troupe
    addMusician(musician) {
        if (this.musicians.length >= 5) {
            throw new Error('Cannot add more than 5 musicians to a troupe.');
        }
        this.musicians.push(musician);


        console.log(`Added member: ${musician.name} with rate $${musician.ratePerHour}/hour`);
    }

    addMember(musician) {
        if (this.troupeMembers.length >= 5) {
            throw new Error('Cannot add more than 5 members to a troupe.');
        }
        this.troupeMembers.push(musician);
    }

    // Method to get a summary of the troupe
    troupeSummary() {
        // Counting the number of each type of musician
        const instrumentCounts = this.troupeMembers.reduce((counts, musician) => {
            const type = musician.constructor.name;
            counts[type] = (counts[type] || 0) + 1;
            return counts;
        }, {});
        return `Troupe Name: ${this.name}, Genre: ${this.genre}, Minimum Duration: ${this.minimumDuration} hours, Musicians: ${JSON.stringify(instrumentCounts)}`;
    }

    // Method to get detailed information of the troupe
    troupeDetails() {
        const details = this.troupeMembers.map(musician => `${musician.constructor.name}: ${musician.introduce()} Interesting Fact: ${musician.interestingFact()}`).join('\n');
        console.log(details);
        return `${this.troupeSummary()}\nMusicians Details:\n${details}`;
    }

    // Method to calculate the cost for a given duration
    calculateCost(hours) {
        if (hours < this.minimumDuration) {
            throw new Error(`Minimum booking duration is ${this.minimumDuration} hours.`);
        }

        let totalRate = 0;
        console.log("musicians", this.musicians.length);
        this.musicians.forEach(musician => {
            console.log(`Musician: ${musician.name}, Rate per hour: $${musician.ratePerHour}`);
            totalRate += musician.ratePerHour;
        });

        console.log("troupe members", this.troupeMembers.length);
        for (let i = 0; i < this.troupeMembers.length; i++) {
            const member = this.troupeMembers[i];
            console.log(`Member: ${member.name}, Rate per hour: $${member.ratePerHour}`);
            totalRate += member.ratePerHour;
        }

        console.log("outside ", this.troupeMembers);
        console.log(`Total hourly rate for troupe: $${totalRate}`);

        return `Total cost for ${hours} hours: $${totalRate * hours}`;
    }

}

module.exports = Troupe;