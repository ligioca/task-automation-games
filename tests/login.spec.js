
const { test, expect } = require("@playwright/test")
const { LoginPage } = require("../pages/login.po")
// const { UserStatePage } = require("../../pages/userState.po")
// const { USER_EMAIL, USER_PASSWORD } = require("../constants/env.js")
// const { beforeEachTasks } = require("../../helpers/hooks")

// eslint-disable-next-line no-empty-pattern
// test.beforeEach(async ({}, testInfo ) => {
// 	beforeEachTasks(testInfo)
// })

// eslint-disable-next-line no-empty-pattern
// test.afterEach(async ({}, testInfo) => {
// 	console.log ("### Finished test '" + testInfo.title + "' with status: " + testInfo.status)
// }) 

test("Login", async ({ page })  => {
	const loginPage = new LoginPage(page)
	// const userStatusPage = new UserStatePage(page) 
	
	await test.step("test 1", async () => {
		await loginPage.goto()
        await loginPage.loginButton.click()
		// await loginPage.authenticate("testtaskuser@arkadium.com", "Test123123")
	})

    await expect(loginPage.email).toBeVisible()

    await loginPage.email.type("haklsdhfkladfjkljsflksjdfkls")

    await expect(loginPage.password).toBeVisible()

    await loginPage.password.type("haklsdhfkladfjkljsflksjdfkls")

	// await test.step("Agent status is available", async () => {
	// 	await userStatusPage.waitForUserStatus("Available")
	// })
})