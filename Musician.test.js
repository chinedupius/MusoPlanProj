const { Musician, Guitarist, Bassist, Percussionist, Flautist } = require('./musicians');

// Testing the musician name
test('Test Musician Name is set correctly', () => {
    const musician = new Musician('Jonny', ['Guitar'], 5, 60);
    expect(musician.name).toEqual('Jonny');
});

test('Test Musician Name less than 3 characters', () => {
    expect(() => new Musician('JD', ['Guitar'], 5, 60)).toThrowError('Name must be between 3 and 30 characters.');
});

test('Test Musician Name more than 30 characters', () => {
    expect(() => new Musician('hsjssjdieifv9v9rudshsdcueddudcdu', ['Guitar'], 5, 60))
        .toThrowError('Name must be between 3 and 30 characters.');
});

// Testing the Years of playing and making sure its non negative
test('Test yearsOfPlaying validation for Musician', () => {
    // Valid yearsOfPlaying value
    const validMusician = new Musician('Jonny', ['Guitar'], 5, 60);
    expect(validMusician.yearsOfPlaying).toEqual(5);

    // Invalid yearsOfPlaying value (negative)
    expect(() => new Musician('Alice', ['Piano'], -2, 70)).toThrowError('Years of playing must be non-negative.');
});

// Testing the rates
test('Test ratePerHour validation for Musician', () => {
    // Valid ratePerHour value
    const validMusician = new Musician('Jonny', ['Guitar'], 5, 60);
    expect(validMusician.ratePerHour).toEqual(60);

    // Invalid ratePerHour value (equal to the threshold)
    expect(() => new Musician('Alice', ['Piano'], 10, 50)).toThrowError('Hourly rate must be over 50.');

    // Invalid ratePerHour value (below the threshold)
    expect(() => new Musician('Bob', ['Drums'], 8, 40)).toThrowError('Hourly rate must be over 50.');
});

// Testing for introduction of Musician, years of playing and hourly rate
test('Test introduce method for Musician', () => {
    const musician = new Musician('Jonny', ['Guitar'], 5, 60);
    const introduction = musician.introduce();

    // Validate the content of the introduction
    expect(introduction).toContain('I am Jonny');
    expect(introduction).toContain('5 years of experience');
    expect(introduction).toContain('charging $60 per hour');
});

//Testing method to provide an interesting fact about the musicians and also its instruments
test('Test interestingFact method for Musician and subclasses', () => {
    const musician = new Musician('John', ['Guitar'], 5, 60);
    const guitarist = new Guitarist('Eddie', ['Guitar'], 10, 80);
    const bassist = new Bassist('Alice', ['Bass'], 8, 70);
    const percussionist = new Percussionist('Mike', ['Drums'], 15, 90);
    const flautist = new Flautist('Anna', ['Flute'], 12, 75);

    // Test interestingFact method for Musician (base class)
    expect(musician.interestingFact()).toEqual('');

    // Test interestingFact method for Guitarist (sub class)
    expect(guitarist.interestingFact()).toEqual('The more strings you have, the better you are.');

    // Test interestingFact method for Bassist (sub class)
    expect(bassist.interestingFact()).toEqual('Everyone loves a bassist');

    // Test interestingFact method for Percussionist (sub class)
    expect(percussionist.interestingFact()).toEqual('I drum');

    // Test interestingFact method for Flautist (sub class)
    expect(flautist.interestingFact()).toEqual('1989 heavy metal instrument of the year');
});