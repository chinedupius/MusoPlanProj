# MusoPlan Testing Requirements

## Prepared By
Chinedu Pius Ukachukwu

## Introduction
This document outlines the testing requirements for MusoPlan based on the client's specifications. The goal is to ensure the reliability, functionality, and compliance of the software with the provided requirements.

## Test Requirements
This document confirms the validation of user requirements through both manual and automation testing methods.

### Manual Testing Process (Human Interaction)
The manual testing process will involve human testers interacting with the MusoPlan application to validate its functionalities, user interfaces, and overall user experience.

### Automation Testing Process (Jest Automation)
The automation testing process will utilize Jest testing tool to execute predefined test cases, validate system functionalities, and ensure robustness.

## Test Scenarios for Quality Purposes
The following test scenarios have been identified for thorough testing to ensure the quality and reliability of MusoPlan:

---

## Create a Musician

### Musician Data Requirements:

- **Name:** String (between 3 and 30 characters)
- **Instrument Type:** String (Guitarist, Bassist, Percussionist, Flautist)
- **Years Playing:** Numbers (non-negative)
- **Hourly Rate:** Float (Hourly rate must be over 50)
- **Interesting Fact:** String

#### Behaviors:
- Describe an interesting fact depending on their instrument

### Interesting Fact Depending on Instrument
- **Guitarist:** "The more strings you have, the better you are"
- **Bassist:** "Everyone loves a bassist"
- **Percussionist:** "Me drum"
- **Flautist:** "1989 heavy metal instrument of the year"

- **Introduction:** Introduce themselves which must include their name, instrument, years playing, hourly rate, and interesting fact.

---

## Create a Troupe

### Troupe Data Requirements:

- **Name:** String (3-30 characters)
- **Genre:** Genre (Rock, Jazz, Pop)
- **Minimum Duration:** Float (0.5 to 3 hours)
- **Hourly Rate:** Float
- **Musicians:** List of Musician objects (up to 5 musicians)

#### Behaviors: 
- Describe the troupe in detail by giving the troupe summary and then having each musician in the troupe introduce themselves

## Add Musician
- Adds a Musician object to the troupe.

## Troupe Summary
- Returns a brief description of the troupe.

## Troupe Detail:
- Returns a detailed description, including each musician's introduction.

## Calculate Cost:
- Calculates the total cost for deploying the troupe for a given duration.

## Read File:
- Read a list of troupe names to be populated from a file

## Write File
- Write a list of the detailed descriptions for all troupes to a given filename


## Class Relationships

- The Troupe class aggregates Musician objects, each representing a different instrumentalist.
- Musician class instances vary in type, representing the specialization of each musician (e.g., Guitarist, Flautist, Bassist, Percussionist).

## Program Inputs

- User commands via CLI for creating musicians and troupes, adding musicians to troupes, and specifying their attributes.
- File input for reading a list of troupe names.

## Program Outputs

- Console output providing summaries and detailed descriptions of troupes.
- Cost calculation output for troupe deployment.
- File output containing detailed descriptions of all troupes.

## Data Structures and Algorithms

### Data Structures:

- Arrays for managing collections of musicians.
- Objects for storing musician and troupe attributes.

### Algorithms:

- Iteration over musician lists for aggregation and cost calculations.
- Conditional logic for handling different instrumentalist types and input validation.

## Behavioral Loops and Conditional Behavior

- Loops are used for iterating through musicians in a troupe and for processing user commands.
- Conditional statements manage the logic for different types of musicians, input validation, and error handling.

## Organizational and Development Requirements

- Compliance with Globex's version control, software development, and testing requirements.
- Implementation of unit tests using Jest, ensuring over 75% coverage.
- Adherence to MDN's General JavaScript guidelines.

---

By following these testing requirements, we aim to ensure that MusoPlan meets the client's expectations for reliability, functionality, and compliance.