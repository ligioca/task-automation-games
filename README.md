# Task-Automation-Game
Automation for Games Platform

## Tech stack
- Javascript
- Node.JS (12+)
- Playwright
- Docker

## How to setup
- Clone the project: `git clone https://github.com/ligioca/task-automation-games.git`
- Install dependencies: `npm install`
- The credentials and URL for the tests must be filled in the `.env` file. 

- If it is the first time running the project, please run `npx playwright install`

### Without docker: 
- All the tests localy: `npm run test`
- Specific test localy: `npm run test [TEST_PATH]`

### With docker: 
- Run: `npm run test:docker`

**Note**: I was not able to have all the tests passed probably because of captcha (an investigation should be done). I was also not able to verify the allure report running on docker. 

## Tests
This project covers the main flow of three Use Cases:

**_Given a list of X ‘Best games’, ensure all of them are available in the ‘Best Games’
section_**
- File: tests/best-games.spec.js
- Test Case: "All the best games should be in the list of best games"


**_Given a category, ensure that using the ‘search’ component to search for that category
lists the category under the search results_**
- File: tests/search.spec
- Test Case: "Searching for category should bring the correct category result"


**_Given a username and password, and a list (or any structure) of pairs price:gems, ensure
that the Gem prices shown at the shop are correct._**
- Files: tests/shop-gems-prices.spec.js
- Test Case: "Gems should have correct prices"

The 3 specs are configured to run sequentially, but you can have them running in parallel with 3 different workers (3 instances of chromium) by chaging the `workers` on `playwright.config.js`. 
In the same place, you can configure the `retries` of the tests that are set initially to 0. 

## Report
This project uses Allure for reporting. 
To check the report locally, run the following command after the test execution:

`allure generate ./allure-results --clean && allure open ./allure-report`

If there is a failed test, you can check the screeshot and video of the problem in the report.


<img width="1430" alt="Screenshot 2024-10-12 at 02 15 08" src="https://github.com/user-attachments/assets/c6c7202e-33f7-4745-881a-7a3da267316f">


## Formatting:
Use command `npm run lintfix` to get the formatting issues fixed.



## Video of the tests running:

https://github.com/user-attachments/assets/729cfa8a-caef-4b11-9f2c-260c1f70cada



