# Task-Automation-Game
Automation for Games Platform

## Tech stack
Javascript
Node.JS (12+)
Playwright
Docker

## How to setup
- Clone the project: **SCRIPT**
- Install dependencies: `npm install`
- If it is the first time running the project, run `npx playwright install`
- The credentials for the tests must be filled in the `.env` file. 

# No docker: 
- In order to run localy (no docker) all the tests: `npx playwright test`
- In order to run localy (no docker) an specific test: `npx playwright test [TEST PATH]`

# With docker: 
WIP

## Tests
This project covers the main flow of two Use Cases:

_Given a list of X ‘Best games’, ensure all of them are available in the ‘Best Games’
section_
    - File: tests/best-games.spec.js
    - Test Case: "All the best games are in the list of best games"

_Given a category, ensure that using the ‘search’ component to search for that category
lists the category under the search results_
    - File: tests/search.spec
    - Test Case: "Search for category results the corresponding category"

## Report
This project uses Allure for reporting. 
To check the report locally, run the following command after the test execution:

`allure generate ./allure-results --clean && allure open ./allure-report`

WIP: 
UPDATE DOCKER
ARE THE TESTS RUNNING OK ALL TOGETHER (add afterall)
ADD IMAGE OF REPORTING AND MAKE IT BETTER

