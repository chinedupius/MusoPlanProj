# MusoPlan Software Development Report

## Introduction
MusoPlan is a command-line software solution designed for the music management team at Globex Corporation. Its primary function is to model and predict the success of elite musicians by managing the logistics and costs associated with deploying them as a troupe.

## Class Descriptions

### Musician Class
- **Data Attributes**:
  - Name: String (3-30 characters)
  - Instrument Type: Enum (Guitarist, Bassist, Percussionist, Flautist)
  - Years Playing: Integer (non-negative)
  - Hourly Rate: Float (over 50)
  - Interesting Fact: String
- **Behaviors**:
  - Introduction: Returns a string with the musician's details and interesting fact.
- **Inheritance**:
  - Inherits from Instrumentalist class.

### Troupe Class
- **Data Attributes**:
  - Name: String (3-30 characters)
  - Genre: Enum (Rock, Jazz, Pop)
  - Minimum Duration: Float (0.5 to 3 hours)
  - Hourly Rate: Float
  - Musicians: List of Musician objects (up to 5 musicians)
- **Behaviors**:
  - Add Musician: Adds a Musician object to the troupe.
  - Troupe Summary: Returns a brief description of the troupe.
  - Troupe Detail: Returns a detailed description, including each musician's introduction.
  - Calculate Cost: Calculates the total cost for deploying the troupe for a given duration.
- **Inheritance**: None.

### Instrumentalist Class
- **Purpose**: Serves as a base class for all types of musicians.
- **Inheritance**: Base class, no inheritance.

## Class Relationships
- The Troupe class aggregates Musician objects, each representing a different instrumentalist.
- Musician class instances vary in type, representing the specialization of each musician (e.g., Guitarist, Flautist).

## Program Inputs
- User commands via CLI for creating musicians and troupes, adding musicians to troupes, and specifying their attributes.
- File input for reading a list of troupe names.

## Program Outputs
- Console output providing summaries and detailed descriptions of troupes.
- Cost calculation output for troupe deployment.
- File output containing detailed descriptions of all troupes.

## Data Structures and Algorithms
- **Data Structures**:
  - Lists/Arrays for managing collections of musicians.
  - Objects/Hashmaps for storing musician and troupe attributes.
- **Algorithms**:
  - Iteration over musician lists for aggregation and cost calculations.
  - Conditional logic for handling different instrumentalist types and input validation.

## Behavioral Loops and Conditional Behavior
- Loops are used for iterating through musicians in a troupe and for processing user commands.
- Conditional statements manage the logic for different types of musicians, input validation, and error handling.

## Organizational and Development Requirements
- Compliance with Globex's version control, software development, and testing requirements.
- Implementation of unit tests using Jest, ensuring over 75% coverage.
- Adherence to MDN's General JavaScript guidelines.

## Conclusion
MusoPlan is designed to be a robust, user-friendly tool for the music management team at Globex Corporation. It adheres to the organization's high standards for software development and testing, ensuring quality and reliability.