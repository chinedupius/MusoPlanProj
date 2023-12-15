# Test Progress Report

## Date of Execution

Date: 11/12/2023

## Test Cases

### Musician Class Tests

- **User Requirement**: Creation and validation of Musicians with appropriate attributes.
- **Inputs**: Various attributes for Musicians such as name, instrument, years of playing, and rate per hour.
- **Expected Outcomes**:
  - Musician names are set correctly and validated for length.
  - Years of playing and rate per hour are validated for non-negative values and appropriate thresholds.
  - Introductions and interesting facts about musicians are generated correctly.
- **Defects Identified**: No defects reported in the test cases.
- **Strategies for Amending Defects**: Not applicable.
- **Test Coverage**: The tests cover musician creation, attribute validation, and method functionality.

### Troupe Functionality Tests

- **User Requirement**: Troupe creation, musician addition, and summary details.
- **Inputs**: Troupe names, genres, durations, and musician details.
- **Expected Outcomes**:
  - Troupe names, genres, and durations are set and validated.
  - Musicians can be added to troupes with limits enforced.
  - Troupe summaries and details are generated accurately reflecting the troupe composition.
- **Defects Identified**: During the testing phase, i encountered specific challenges, particularly with the Troupes class. The primary issue was the complexity of adding musicians to the troupe and calculating their hourly rates. This led to errors when attempting to add musicians, necessitating several code adjustments.
- **Strategies for Amending Defects**: Adjustments included:
- Altering the troupe class and associated functions to handle the addition of musicians correctly.
- Modifying input handling for troupe attributes such as name, type, years of playing, and hourly rate to facilitate testing.
- Creating variables to pass predefined values in tests to simulate user input and meet client requirements.

These changes successfully addressed the defects encountered, allowing the tests to pass and the system to function as intended.
- **Test Coverage**: The tests cover troupe creation, validation, adding musicians, and generating summaries and details.

### Troupe Functionality Additional Tests

- **User Requirement**: Testing troupe name setting, genre validation, and duration checks.
- **Inputs**: Troupe name, genre, and minimum duration for performance.
- **Expected Outcomes**:
  - Troupe names are set with correct characters.
  - Valid genres do not throw errors; invalid genres do.
  - Valid minimum and maximum durations are checked and enforced.
- **Defects Identified**: No defects reported in the test cases.
- **Strategies for Amending Defects**: Not applicable.
- **Test Coverage**: These tests ensure troupe object creation adheres to business rules and validations.

### Miscellaneous Functionality Tests

- **User Requirement**: Testing miscellaneous functionality including file operations and musician creation.
- **Inputs**: Musician details for creation, filenames for read/write operations.
- **Expected Outcomes**:
  - Musicians are created correctly.
  - Troupe names are exported and imported to and from files accurately.
- **Defects Identified**: No defects reported in the test cases.
- **Strategies for Amending Defects**: Not applicable.
- **Test Coverage**: These tests ensure file operations and musician creation functions operate as expected.

## Testing Phase Discussion and Challenges

During the testing phase of the MunoPlan management system, several challenges were encountered. The testing of the musician class was straightforward, which involved testing the Musician class along with its subclasses such as the Guitarist, Bassist, Percussionist, and Flautist.

However, testing the Troupes class presented challenges and ambiguities, primarily due to the complexity involved in adding musicians to the troupe and calculating their hourly rates. Errors encountered while attempting to add musicians to the troupe necessitated alterations to the troupe class and associated functions to ensure successful testing of the functionality.

The input process from the user made it difficult to test attributes such as the troupe name, type, years of playing, and hourly rate. To overcome this, variables were created to pass values, allowing for successful test execution that meets the client's requirements.

Adjustments to the code were required for creating a troupe for testing purposes, as the initial troupe tests did not pass.