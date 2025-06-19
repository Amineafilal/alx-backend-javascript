# Unittests in JS

This project contains a series of tasks focused on unit testing in JavaScript using various testing frameworks and methodologies.

## Requirements

- All files will be executed on Ubuntu 18.04 using Node 12.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- All test files should be executed using `npm test`
- Code style should follow Semistandard formatting

## Project Structure

```
.
├── 0-calcul.js
├── 0-calcul.test.js
├── 1-calcul.js
├── 1-calcul.test.js
├── 2-calcul_chai.js
├── 2-calcul_chai.test.js
├── 3-payment.js
├── 3-payment.test.js
├── 4-payment.js
├── 4-payment.test.js
├── 5-payment.js
├── 5-payment.test.js
├── 6-payment_token.js
├── 6-payment_token.test.js
├── 7-skip.test.js
├── utils.js
├── 8-api/
│   ├── api.js
│   ├── api.test.js
│   └── package.json
├── 9-api/
│   ├── api.js
│   ├── api.test.js
│   └── package.json
└── 10-api/
    ├── api.js
    ├── api.test.js
    └── package.json
```

## Tasks

### 0. Basic test with Mocha and Node assertion library
- File: `0-calcul.js`, `0-calcul.test.js`
- Simple calculator function with basic number rounding
- Tests using Node's assert library

### 1. Combining descriptions
- File: `1-calcul.js`, `1-calcul.test.js`
- Enhanced calculator with SUM, SUBTRACT, and DIVIDE operations
- Organized test suites using describe blocks

### 2. Basic test using Chai assertion library
- File: `2-calcul_chai.js`, `2-calcul_chai.test.js`
- Same functionality as task 1 but using Chai assertions
- Demonstrates behavior-driven development style

### 3. Spies
- File: `3-payment.js`, `3-payment.test.js`
- Introduction to test spies using Sinon
- Validates function calls and arguments

### 4. Stubs
- File: `4-payment.js`, `4-payment.test.js`
- Using stubs to control function behavior
- Demonstrates mocking external dependencies

### 5. Hooks
- File: `5-payment.js`, `5-payment.test.js`
- Using Mocha hooks (beforeEach/afterEach)
- Managing test setup and cleanup

### 6. Async tests
- File: `6-payment_token.js`, `6-payment_token.test.js`
- Testing asynchronous functions
- Using done callback for async tests

### 7. Skip
- File: `7-skip.test.js`
- Demonstrates test skipping functionality
- Managing test execution

### 8. Basic Integration testing
- Directory: `8-api/`
- Simple Express server with one endpoint
- Basic integration tests using request

### 9. Regex integration testing
- Directory: `9-api/`
- Express server with regex route parameters
- Testing different URL patterns

### 10. Deep equality & Post integration testing
- Directory: `10-api/`
- Complex API with multiple endpoints
- Testing POST requests and JSON responses

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run tests:
```bash
npm test
```

For API tests (tasks 8-10), start the server first:
```bash
node api.js
```

Then run the tests in a separate terminal:
```bash
npm test api.test.js
```

## Dependencies

- Mocha: Test framework
- Chai: Assertion library
- Sinon: Test spies, stubs, and mocks
- Express: Web framework (for API tasks)
- Request: HTTP client for testing

## Author

ALX Africa