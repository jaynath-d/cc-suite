# cc-suite
CC-Suite is a powerful all-in-one solution for managing credit card operations. From validating card details to generating random cards and checking BIN information, CC-Suite offers a comprehensive toolkit for secure and efficient credit card management. Whether you're a developer, business, or individual looking to ensure the accuracy and security of credit card transactions, CC-Suite provides the essential tools you need in a single, user-friendly package.

## Latest Version
![Latest Version](https://img.shields.io/github/v/release/jaynath-d/cc-suite)
![npm downloads](https://img.shields.io/npm/dw/cc-suite)

## Installation
To install the package, use the following command:
```sh
npm install --save cc-suite
```

## Coverage
[![Coverage: N/A](https://img.shields.io/badge/Coverage-N/A-lightgrey)](./coverage/lcov-report/index.html)

## Usage
Below are some minimal usage examples demonstrating how to use the `cc-suite` package.

### Initialization
You can initialize the CCSuite using either CommonJS or ES6 syntax:
```javascript
// CommonJS
const CCSuite = require("cc-suite");

// ES6
import CCSuite from 'cc-suite';
```

### Validate card
Tests that validateCard returns true for a valid card number
```javascript
 it('should return true when a valid card number is provided', () => {
    const validCardNumber = '4242424242424242';
    const result = CCSuite.validateCard(validCardNumber);
    expect(result).toBe(true);
});
```

### Generate valid card
Tests that generates a card number with a specific prefix and length
```javascript
 it('should generate a valid card number with the given bin and length', () => {
    const bin = '4242';
    const length = 16;
    const result = CCSuite.generateRandomCard(bin, length);
    const isValid = CCSuite.validateCard(result);
    expect(isValid).toBe(true);
});
```
