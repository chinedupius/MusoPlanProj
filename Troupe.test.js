const Troupe=require('./troupe.js');
const { Musician, Guitarist, Bassist } = require('./musicians.js');

 test('Test Troupe name is set with correct characters', () => {
    const troupe = new Troupe('trocan', 'rock', 3);
    expect(troupe.name).toEqual('trocan');
 });

 test('Valid genre does not throw an error', () => {
    expect(() => { new Troupe('ValidTroupe', 'rock', 1); }).not.toThrow();
});

test('Invalid genre throws an error', () => { expect(() => {
        new Troupe('InvalidTroupe', 'blues', 1); }).toThrow('Invalid genre. Must be rock, jazz, or pop.');
});

test('Valid minimum duration does not throw an error', () => {
    expect(() => { new Troupe('ValidDurationTroupe', 'rock', 1); }).not.toThrow();
});

test('Invalid minimum duration throws an error', () => {
    expect(() => { new Troupe('InvalidDurationTroupe', 'rock', 0.1); }).toThrow('Minimum duration must be between 0.5 and 3 hours.');
});

test('Invalid maximum duration throws an error', () => {
    expect(() => { new Troupe('InvalidDurationTroupe', 'rock', 4); }).toThrow('Minimum duration must be between 0.5 and 3 hours.');
});

describe('Troupe addMusician Method Tests', () => {
    let troupe;
    let musician;

    beforeEach(() => {
        troupe = new Troupe('folarin', 'rock', 1);
        musician = new Musician('tayoni', 5, 100);
    });

    test('Successfully adds a musician', () => {
        const response = troupe.addMusician(musician);
        expect(response).toEqual(`Added member: ${musician.name} with rate $${musician.ratePerHour}/hour`);
        expect(troupe.musicians.length).toBe(1);
    });

    test('Throws error when adding a sixth musician', () => {
        // Adding 5 musicians
        for (let i = 0; i < 5; i++) {
            troupe.addMusician(new Musician(`Musician ${i}`, 5, 100));
        }

        // Attempt to add a sixth musician
        expect(() => troupe.addMusician(musician)).toThrow('Cannot add more than 5 musicians to a troupe.');
    });
});

describe('Troupe addMember Method Tests', () => {
    let troupe;
    let musician;

    beforeEach(() => {
        troupe = new Troupe('TestTroupe', 'rock', 3);
        musician = new Musician('John Doe', ['guitar'], 5, 100);
    });

    test('Successfully adds a member', () => {
        troupe.addMember(musician);
        expect(troupe.troupeMembers.length).toBe(1);
        expect(troupe.troupeMembers).toContain(musician);
    });

    test('Throws error when adding a sixth member', () => {
        for (let i = 0; i < 5; i++) {
            troupe.addMember(new Musician(`Musician ${i}`, ['instrument'], 5, 100));
        }
        expect(() => troupe.addMember(musician)).toThrow('Cannot add more than 5 members to a troupe.');
    });
});

describe('Troupe Class Tests', () => {
    let troupe;
    let guitarist = new Guitarist('John', ['Guitar'], 5, 100);
    let bassist = new Bassist('Paul', ['Bass'], 4, 90);

    beforeEach(() => {
        troupe = new Troupe('The Beatles', 'rock', 1);
    });

    test('troupeSummary with empty troupe', () => {
        const summary = troupe.troupeSummary();
        expect(summary).toBe(`Troupe Name: The Beatles, Genre: rock, Minimum Duration: 1 hours, Musicians: {}`);
    });
    
    test('troupeSummary with musicians', () => {
        troupe.addMember(guitarist);
        troupe.addMember(bassist);
        const summary = troupe.troupeSummary();
        expect(summary).toBe(`Troupe Name: The Beatles, Genre: rock, Minimum Duration: 1 hours, Musicians: {"Guitarist":1,"Bassist":1}`);
    });
    
    test('troupeDetails with musicians', () => {
        troupe.addMember(guitarist);
        troupe.addMember(bassist);
        const details = troupe.troupeDetails();
        const expectedDetails = `Troupe Name: The Beatles, Genre: rock, Minimum Duration: 1 hours, Musicians: {"Guitarist":1,"Bassist":1}\nMusicians Details:\nGuitarist: I am John, with 5 years of experience, charging $100 per hour. Interesting Fact: The more strings you have, the better you are.\nBassist: I am Paul, with 4 years of experience, charging $90 per hour. Interesting Fact: Everyone loves a bassist`;
        expect(details).toBe(expectedDetails);
    });

    test('calculateCost with duration less than minimum', () => {
        expect(() => troupe.calculateCost(0.5)).toThrow();
    });

    test('calculateCost with valid duration', () => {
        troupe.addMember(guitarist);
        troupe.addMember(bassist);
        expect(troupe.calculateCost(2)).toBe('Total cost for 2 hours: $380');
    });
});