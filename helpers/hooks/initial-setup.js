const { expect } = require("@playwright/test")
const { InitialPage } = require("../../pages/initial.po")
const { LoginPage } = require("../../pages/login.po")
const { MainPage } = require("../../pages/main.po")
const { ignoreAds } = require("../ads-handler")
require("dotenv").config()

async function initialSetup(page) {
	const initialPage = new InitialPage(page)
	const loginPage = new LoginPage(page)
	const mainPage = new MainPage(page)

	await ignoreAds(page)

	await initialPage.goto()
	await initialPage.agreeCookies()

	await initialPage.loginButton.click()

	await expect(loginPage.password).toBeVisible()
	await expect(loginPage.email).toBeVisible()

	await loginPage.authenticate(process.env.LOGIN, process.env.PASSWORD)

	await expect(mainPage.mainMenu).toBeVisible()
	await expect(mainPage.arkadiumFanFavoritesPanel).toBeVisible()
	await expect(mainPage.newGameReleasesPanel).toBeVisible()
}

module.exports = { initialSetup }
