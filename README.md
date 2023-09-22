# QA-ASSIGNMENT

### Prerequisites
Before you begin, ensure you have met the following requirements:

- **Node.js**: Your system should have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

  ```sh
  # To check if Node.js is installed, run this command:
   node -v

  # Example output: v16.3.0
  ```

- **TypeScript**: This project is written in TypeScript, so you need to have TypeScript installed globally.

    ```sh
    # Install TypeScript globally using npm
      npm install -g typescript
   
   # Check TypeScript version
      tsc -v
   
   # Example output: Version 4.5.2
    ``` 
- **Visual Studio Code**: We recommend using Visual Studio Code as the development environment for this project. You can download it from code.visualstudio.com.
  Once installed, make sure to install the following extensions for a smoother TypeScript development experience:

   - **Visual Studio Code TypeScript Extension**: Provides enhanced TypeScript support.

   - **Visual Studio Code ESLint Extension**: If your project uses ESLint for linting TypeScript code, install this extension for linting support.
### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HieuVMO246/qa-assignment.git
   cd qa-assignment
   ```
2. Install dependencies:
     ```
     npm install
    ```

### Project structure
```
qa-assignment/
|-- data                          # Data test
|-- src/
|   |-- base/                     
|   |   |-- BaseAPI.ts            # Common function api
|   |   |-- CommonStep.ts         # Common function step
|-- config/
|   |-- setup.ts                  # Configuration test
|   |-- PathAPI.ts                # Configuration path API
|   |-- GlobalVariable.ts         # Configuration files
|-- step/                         # API step file        
|-- services/                     # Function call API
|-- test/                         # API test files
|-- tsconfig.json                 # TypeScript configuration
|-- jest.config.js                # Jest configuration
|-- package.json                  # Project dependencies and scripts
|-- README.md                     # Project documentation
```

### How to run test

```
npm run test
```

### View report

Go to the Project root directory: `./results/test-report.html`

### Test case and sumary / Bug report 

Go to the Project root directory: `./documents`