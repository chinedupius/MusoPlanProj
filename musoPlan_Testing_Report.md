# MusoPlan Testing Report

## Test Case 1: Creating a Musician

### User Requirement:
As a user, I should be able to create a musician with valid information.

### Inputs:
- Troupe name: "Rock Band"
- Musician name: "John Doe"
- Musician type: "Guitarist"
- Years playing: 5
- Hourly rate: $60

### Expected Outcome:
The system should create a musician with the provided information.

### Actual Outcome:
The musician "John Doe" was created successfully.

### Modifications Required:
No modifications required.

============================================================================

## Test Case 2: Creating a Troupe

### User Requirement:
As a user, I should be able to create a troupe with valid information.

### Inputs:
- Troupe name: "Rock Band"
- Troupe genre: "Rock"
- Minimum duration: 2 hours

### Expected Outcome:
The system should create a troupe with the provided information.

### Actual Outcome:
The troupe "Rock Band" was created successfully.

### Modifications Required:
No modifications required.

============================================================================

## Test Case 3: Adding a Musician to a Troupe

### User Requirement:
As a user, I should be able to add a musician to a troupe.

### Inputs:
- Troupe name: "Rock Band"
- Musician's name: "John Doe" (existing musician)

### Expected Outcome:
The system should add the musician "John Doe" to the "Rock Band" troupe.

### Actual Outcome:
The musician "John Doe" was added to the "Rock Band" troupe successfully.

### Modifications Required:
No modifications required.

============================================================================

## Test Case 4: Showing Cost per Hour

### User Requirement:
As a user, I should be able to calculate and display the total cost for booking a troupe for a specific duration.

### Inputs:
- Troupe name: "Pop Ensemble"
- Duration: 3 hours

### Expected Outcome:
The system should calculate and display the total cost for booking the "Pop Ensemble" troupe for 3 hours.

### Actual Outcome:
The total cost was calculated and displayed correctly.

### Modifications Required:
No modifications required.

============================================================================

## Test Case 5: Exporting Troupe Names

### User Requirement:
As a user, I should be able to export the names of all troupes to a file.

### Inputs:
- Export filename: "abc.txt"

### Expected Outcome:
A file named "abc.txt" should be created with the names of all troupes.

### Actual Outcome:
The file was created successfully.

### Modifications Required:
No modifications required.

============================================================================

## Test Case 6: Importing Troupe Names

### User Requirement:
As a user, I should be able to import troupe names from a file.

### Inputs:
- Import filename: "abc.txt" (Assume this file contains troupe names)

### Expected Outcome:
The system should import troupe names from the specified file.

### Actual Outcome:
The troupe names were successfully imported from "abc.txt".

### Modifications Required:
No modifications required.

============================================================================

## Test Case 7: Showing Troupe Summary

### User Requirement:
As a user, I should be able to view a summary of troupe information.

### Inputs:
- None (Interactive command)

### Expected Outcome:
The system should display a summary of information for each troupe.

### Actual Outcome:
The troupe summary was displayed correctly.

### Modifications Required:
No modifications required.

============================================================================

## Test Case 8: Showing Detailed Troupe Info

### User Requirement:
As a user, I should be able to view detailed information about each troupe.

### Inputs:
- None (Interactive command)

### Expected Outcome:
The system should display detailed information for each troupe, including musician details.

### Actual Outcome:
The detailed troupe information was displayed correctly.

### Modifications Required:
No modifications required.

============================================================================

## Test Case 9: Exiting the Program

### User Requirement:
As a user, I should be able to exit the MusoPlan program.

### Inputs:
- Choice: 9 (Exit option)

### Expected Outcome:
The system should gracefully exit the program.

### Actual Outcome:
The program exited successfully with a thank you message.

### Modifications Required:
No modifications required.