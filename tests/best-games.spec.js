
const { test, expect } = require("@playwright/test")
const { InitialPage } = require("../pages/initial.po")
const { LoginPage } = require("../pages/login.po")
const { MainPage } = require("../pages/main.po")
const { ignoreAds } = require("../helpers/ads-handler")
const { BestPage } = require("../pages/best.po")
const { games } = require("../tests/constants/best-games-list")
require('dotenv').config()


test("Best - all the best games are in the list of games", async ({ page })  => {
    const initialPage = new InitialPage(page)
	const loginPage = new LoginPage(page)
    const mainPage = new MainPage(page)
    const best = new BestPage(page)
	
	await test.step("User login", async () => {
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

	})

    await test.step("User selects Best section", async () => {
        await mainPage.bestGamesSection.click()
        await expect(best.categories).toBeVisible()
    })

    await test.step("List of best games should be shown", async () => {
        await mainPage.bestGamesSection.click()
        for (const game of games) {
            const gameLocator = page.locator(`img[alt="${game}"]`);
            await expect(gameLocator).toBeVisible({ timeout: 5000 });  // Adjust timeout as needed
          }
    })
})