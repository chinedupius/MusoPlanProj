# MusoPlan Test Plan

## The types of testing required
- Automation Testing
- Manual Testing

## Software required to perform testing
- Jest

## Test Case 1: Create a Musician

### Identifier: TC1_CreateMusician

### Test Case Description:
The purpose of this test case is to validate the Musician class and its functions by ensuring that the musician's name is accepted within specified criteria.

### Inputs Values:
- Enter musician name = “Jonny”
- Enter musician name = “Bob”
- Enter musician name = “JD”
- Enter musician name = “abcderfiyljhdslhglsdhglskdhglkshalkg”

### Execution Steps:
1. Execute the Musician function with each input.

### Expected Output Values:
- For the input "Tom Cat", the operation should succeed.
- For the input "ab", the operation should fail.

### Validation Steps:
- Verify that the musician's name is accepted when it meets the specified criteria.
- Verify that the musician's name fails validation when it does not meet the specified criteria.

### Post-Execution Steps:
- Display the recorded musician's details on the command screen in case of success.
- Display a failure message in case of validation failure.

========================================

## Test Case 2: Create a Troupe

### Identifier: TC2_CreateTroupe

### Test Case Description:
This test case aims to validate the function by ensuring that the troupe's genre is accepted within specified criteria.

### Inputs:
- Troupe Genre = "Rock"
- Troupe Genre = "Jazz"
- Troupe Genre = "Pop"
- Troupe Genre = "Classical"

### Execution Steps:
1. Execute the function with each input.

### Expected Output Values:
- For the input "Rock", the operation should succeed.
- For the input "Classical", the operation should fail.

### Validation Steps:
- Verify that the troupe's genre is accepted when it meets the specified criteria.
- Verify that the troupe's genre fails validation when it does not meet the specified criteria.

### Post-Execution Steps:
- Display the recorded troupe's details on the command screen in case of success.
- Display a failure message in case of validation failure.

========================================

## Test Case 3: Add Musician to Troupe

### Identifier: TC3_AddMusicianToTroupe

### Test Case Description:
This test case is designed to validate the function by ensuring that the selected musician and troupe indices are within valid ranges.

### Inputs:
- Select a musician index: 2 (Assuming at least two musicians are available)
- Select a troupe index: 1 (Assuming at least one troupe is available)

### Execution Steps:
1. Execute the function with the given indices.

### Expected Output Values:
- The selected musician is added to the selected troupe.
- If the indices are out of range, display an error message.

### Validation Steps:
- Verify that the function adds the musician to the troupe when indices are valid.
- Verify that the function handles invalid indices and displays an appropriate error message.

### Post-Execution Steps:
- Display a success message when the operation is successful.
- Display an error message when the operation fails.

========================================

## Test Case 4: Show Cost per Hour

### Identifier: TC4_ShowCostPerHour

### Test Case Description:
This test case aims to validate the function by ensuring that the cost calculation is accurate.

### Inputs:
- Select a troupe index: 1 (Assuming at least one troupe is available)
- Enter the number of hours: 3.5

### Execution Steps:
1. Execute the function with the given inputs.

### Expected Output Values:
- The cost calculation is performed.
- The correct cost is displayed on the console.

### Validation Steps:
- Verify that the function calculates the cost accurately based on the provided inputs.

### Post-Execution Steps:
- Display the calculated cost on the console.

========================================

## Test Case 5: Export Troupe Names

### Identifier: TC5_ExportTroupeNames

### Test Case Description:
This test case aims to validate the function by ensuring that troupe names are successfully exported to a file.

### Inputs:
- Enter a valid filename: "exported_troupes.txt"

### Execution Steps:
1. Execute the function with the given filename.

### Expected Output Values:
- Troupe names are exported to the specified file.
- Display a success message.

### Validation Steps:
- Verify that the troupe names are correctly written to the specified file.

### Post-Execution Steps:
- Display a success message on the console.

========================================

## Test Case 6: Import Troupe Names

### Identifier: TC6_ImportTroupeNames

### Test Case Description:
This test case aims to validate the function by ensuring that troupe names are successfully imported from a file.

### Inputs:
- Provide a test file with troupe names: "imported_troupes.txt"

### Execution Steps:
1. Execute the function with the given filename.

### Expected Output Values:
- Troupes are created based on the names in the test file.
- Display a success message with the correct troupe names.

### Validation Steps:
- Verify that the troupes are correctly created based on the names in the test file.

### Post-Execution Steps:
- Display a success message on the console.

========================================

## Test Case 7: Summary Troupe Info

### Identifier: TC7_SummaryTroupeInfo

### Test Case Description:
This test case aims to validate the function by ensuring that a summary of information for all troupes is correctly displayed.

### Inputs:
- Trigger the function through the menu.

### Execution Steps:
1. Execute the function through the menu.

### Expected Output Values:
- Summary information for each troupe is displayed on the console.

### Validation Steps:
- Verify that the summary information is correctly displayed.

### Post-Execution Steps:
- Display the summary information on the console.

========================================

## Test Case 8: Detailed Troupe Info

### Identifier: TC8_DetailedTroupeInfo

### Test Case Description:
This test case aims to validate the function by ensuring that detailed information for all troupes is correctly displayed.

### Inputs:
- Trigger the function through the menu.

### Execution Steps:
1. Execute the function through the menu.

### Expected Output Values:
- Detailed information for each troupe is displayed on the console.

### Validation Steps:
- Verify that the detailed information is correctly displayed.

### Post-Execution Steps:
- Display the detailed information on the console.

========================================

## Test Case 9: Exit the Program

### Identifier: TC9_ExitProgram

### Test Case Description:
This test case aims to validate the functionality of exiting the MusoPlan program.

### Inputs:
- Select option 9 from the menu.

### Execution Steps:
1. Execute the exit option from the menu.

### Expected Output Values:
- The program exits gracefully.
- Display a confirmation message. Thanking the user for visiting the system

### Validation Steps:
- Verify that the program terminates without errors.

### Post-Execution Steps:
- Display a confirmation message on the console. Thanking the user for visiting the system