# Task-Automation-Game
Automation for Games Platform

## Tech stack
Javascript
Node.JS (12+)
Playwright
Docker

## How to setup
- Clone the project: `git clone https://github.com/ligioca/task-automation-games.git`
- Install dependencies: `npm install`
- The credentials for the tests must be filled in the `.env` file. 
- If it is the first time running the project, run `npm run test`

# No docker: 
- In order to run localy (no docker) all the tests: `npx playwright test`
- In order to run localy (no docker) an specific test: `npx playwright test [TEST_PATH]`

# With docker: 
WIP

## Tests
This project covers the main flow of three Use Cases:

_Given a list of X ‘Best games’, ensure all of them are available in the ‘Best Games’
section_
    - File: tests/best-games.spec.js
    - Test Case: "All the best games should be in the list of best games"

_Given a category, ensure that using the ‘search’ component to search for that category
lists the category under the search results_
    - File: tests/search.spec
    - Test Case: "Searching for category should bring the correct category result"

_Given a username and password, and a list (or any structure) of pairs price:gems, ensure
that the Gem prices shown at the shop are correct._
    - Files: tests/shop-gems-prices.spec.js
    - Test Case: "Gems should have correct prices"

The 3 specs are configured to run in parallel, with 3 different workers (3 instances of chromium). You can chang this configuration on `playwright.config.js`.

## Report
This project uses Allure for reporting. 
To check the report locally, run the following command after the test execution:

`allure generate ./allure-results --clean && allure open ./allure-report`

## Formatting:
Use command `npm run lintfix` to get the formatting issues fixed.



WIP: 
UPDATE DOCKER
ARE THE TESTS RUNNING OK ALL TOGETHER (add afterall)
ADD IMAGE OF REPORTING AND MAKE IT BETTER

