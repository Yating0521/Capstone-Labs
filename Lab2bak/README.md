# Lab 2 React Project

This project is a simple React application created using Create React App. It demonstrates basic concepts of React, including components, state management, event handling, and routing.

## Project Structure

```
lab2
├── public
│   ├── index.html        # Main HTML file for the React application
│   └── favicon.ico       # Favicon for the application
├── src
│   ├── components
│   │   └── SimpleComponent.js  # A simple functional component
│   ├── pages
│   │   ├── Home.js       # Main page of the application
│   │   └── About.js      # About page providing information
│   ├── App.js            # Main application component with routing
│   ├── index.js          # Entry point of the React application
│   ├── domManipulation.js # Basic JavaScript functions for DOM manipulation
│   └── stateExample.js    # Example of state management in a React component
├── package.json          # Configuration file for npm
├── README.md             # Documentation for the project
└── .gitignore            # Files and directories to be ignored by Git
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd lab2
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Start the development server**:
   ```
   npm start
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000` to view the application.

## Usage

- The application consists of a Home page and an About page.
- You can navigate between the pages using the links provided in the application.
- The `SimpleComponent` demonstrates basic rendering and can be customized using props.
- The `domManipulation.js` file contains functions for manipulating the DOM.
- The `stateExample.js` file showcases how to manage local state in a React component.

## License

This project is open-source and available under the MIT License.