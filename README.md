# Chords Transpose App

This is a React application that transposes musical chords by a specified number of semitones. The app receives an array of chords (e.g., `Em` or `Cmaj7`) and a number of semitones, then it returns the transposed chords.

## Features

- Transpose chords by a specified number of semitones.
- Displays the original and transposed chords in a table.
- Toggle between light and dark mode for a better visual experience.

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine.

### Installation

1. Clone the repository:
```sh
git clone https://github.com/yourusername/chords-transpose-app.git
```

2. Navigate to the project directory:

```sh
cd chords-transpose-app
```

3. Install the dependencies:

```sh
npm install
```

## Running the App
Start the development server:


```sh
npm start
```

Open http://localhost:3000 to view the app in your browser.

Usage
Enter the chords you want to transpose in the input array.
Specify the number of semitones to transpose.
View the original and transposed chords displayed in a table.
Example
Here's how you can use the transposition functionality:

```javascript
import { transposeChords } from './transpose';

const chords = ['Em', 'Cmaj7', 'G', 'D'];
const semitones = 2;
const transposedChords = transposeChords(chords, semitones);
console.table([chords, transposedChords]);
```

## File Structure
1. src/transpose.js: Contains the logic for transposing the chords.
1. src/App.js: Main React component that integrates the transposition logic and renders the UI.
1. src/App.css: Styles for the app, including table borders and dark mode.
1. src/components/ToggleSwitch.js: Component for toggling dark mode.
1. src/components/ToggleSwitch.css: Styles for the toggle switch component.

## Customization
To customize the chords and semitones:

1. Modify the chords and semitones variables in App.js.
1. Adjust styles in App.css to fit your design preferences.

## License
This project is licensed under the GPLV3 License. See the LICENSE file for details.


