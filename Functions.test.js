//Testing 3 functions. createMusician, exportTroupeNames, importTroupeNames
const fs = require('fs');
const { createMusician, exportTroupeNames, importTroupeNames } = require('./musicProcess');

jest.mock('fs');

describe('Troupe Functionality Tests', () => {
    beforeEach(() => {
        jest.resetAllMocks();
        fs.writeFileSync.mockClear();
        fs.readFileSync.mockClear();
    });

    test('createMusician creates a musician correctly', () => {
        const musician = createMusician('John Doe', 'Guitarist', 5, 100);
        expect(musician).toContain('John Doe');
        expect(musician).toContain('Guitarist');
    });

    test('exportTroupeNames writes to a file correctly', () => {
        const filename = 'test.txt';
        exportTroupeNames(filename);
        expect(fs.writeFileSync).toHaveBeenCalledWith(filename, expect.any(String), 'utf8');
    });

    test('importTroupeNames imports troupe names correctly', () => {
        const filename = 'test.txt';
        const mockFileContent = 'Troupe1\nTroupe2';
        fs.readFileSync.mockReturnValue(mockFileContent);

        importTroupeNames(filename);
        expect(fs.readFileSync).toHaveBeenCalledWith(filename, 'utf8');
    });
});