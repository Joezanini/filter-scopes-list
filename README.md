# Filter Scopes List

This React application demonstrates a simple implementation of a display of a list of checkboxes with labels and descriptions. It consists of two main components: `ScopesPicker` and `ScopesSearch`.

## Components

### ScopesPicker

- **Description**: Renders a list of checkboxes based on the options provided.
- **Props**:
  - `scopes`: An array of objects, where each object contains:
    - `name` (string): The main label for the checkbox.
    - `description` (string): A sub-label or additional information for the checkbox.

### ScopesSearch

- **Description**: Manages the visibility of the Scopes List via a search b ar.

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Joezanini/filter-scopes-list.git
   cd filter-scopes-list


Install the dependencies:
npm install



Running the Application
To start the application, use the following command:
npm start

This will run the app in development mode and open it in your default web browser at http://localhost:3000.
Usage
Once the application is running, You will see a search bar and a list of scopes and descriptions.

src/
components/
CheckboxList.js: Contains the CheckboxList component.
FilterButton.js: Contains the FilterButton component.


App.js: Main entry point for the application.
index.js: Renders the App component into the DOM.



Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.
License
This project is licensed under the MIT License - see the LICENSE file for details.
