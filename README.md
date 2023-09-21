# webdriverio-tests

This repository contains test suites developed with WebdriverIO 8, created to practice test automation skills on the saucedemo.com website.

## Table of contents
* [Requirements](#requirements)
* [Setup](#setup)
* [Technologies](#technologies)
* [Debugging in VSCode](#debugging-in-vscode)

## Requirements
- Node.js 18 or Node.js 16 installed (To check node version run: `node -v` or `nvm version` (if you are using nvm))
- Npm installed (It should already be installed when you install Node.js. To check, run: `npm -v`)
- Java installed and added to your path (https://www.java.com/en/download/)
- Chrome browser installed
- Access to the Web

## Setup
**1. Clone this Repository:**
```
git clone git@github.com:justynakantyka/webdriverio-tests.git
```
**2. Go to the gui-tests directory**
```
cd webdriverio-tests
```
**3. Install Dependencies:**
```
npm i
```
**4. Run Tests locally:** \
To run **all specs**, use the following command:
```
npm run wdio
```
To run **a single spec**, use the following command: 
```
npm run wdio -- --spec ./test/specs/{specFileName}.js
```
Examples: \
Login page tests:
```
npm run wdio -- --spec ./test/specs/loginTest.js
```
Inventory page tests:
```
npm run wdio -- --spec ./test/specs/inventoryTest.js
```

## Technologies
- WebdriverIO 8
- Mocha framework
- Spec Reporter
- Node.js at least v16.x or higher
- JavaScript

## Debugging in VSCode
In the repository, there is a configuration for debugging tests in VSCode: `.vscode/launch.json`. \
\
How to debug:
1. Open the test file (e.g. `test/specs/inventoryTest.js`).
2. Set a breakpoint at the location you want to inspect.
3. Go to the 'Run and Debug' tab in VSCode.
4. Click the green arrow to start debugging.