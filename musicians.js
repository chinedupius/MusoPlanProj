// Base class representing a musician with essential properties and methods
class Musician {
    constructor(name, instruments, yearsOfPlaying, ratePerHour) {
        this.name = name; // Musician's name
        this.instruments = instruments; // Array of instruments the musician plays
        this.yearsOfPlaying = yearsOfPlaying; // Years of experience
        this.ratePerHour = ratePerHour; // Hourly rate for performances

        // Validate the length of the musician's name
        if (name.length < 3 || name.length > 30) {
            throw new Error('Name must be between 3 and 30 characters.');
        }

        // Ensure years of playing is a non-negative number
        if (yearsOfPlaying < 0) {
            throw new Error('Years of playing must be non-negative.');
        }

        // Ensure hourly rate is above a certain threshold
        if (ratePerHour <= 50) {
            throw new Error('Hourly rate must be over 50.');
        }
    }

    // Method to introduce the musician
    introduce() {
        return `I am ${this.name}, with ${this.yearsOfPlaying} years of experience, charging $${this.ratePerHour} per hour.`;
    }

    // Method to provide an interesting fact about the musician, intended to be overridden in subclasses
    interestingFact() {
        return '';
    }
}

// Subclass representing a Guitarist
class Guitarist extends Musician {
    // Override the interesting fact method for a guitarist
    interestingFact() {
        return 'The more strings you have, the better you are.';
    }
}

// Subclass representing a Bassist
class Bassist extends Musician {
    // Override the interesting fact method for a bassist
    interestingFact() {
        return 'Everyone loves a bassist';
    }
}

// Subclass representing a Percussionist
class Percussionist extends Musician {
    // Override the interesting fact method for a percussionist
    interestingFact() {
        return 'I drum';
    }
}

// Subclass representing a Flautist
class Flautist extends Musician {
    // Override the interesting fact method for a flautist
    interestingFact() {
        return '1989 heavy metal instrument of the year';
    }
}

// Exporting the classes to make them available for import in other files
module.exports = { Guitarist, Bassist, Percussionist, Flautist };