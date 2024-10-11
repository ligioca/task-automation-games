
const { test, expect } = require("@playwright/test")
const { MainPage } = require("../pages/main.po")
const { BestPage } = require("../pages/best.po")
const { games } = require("../tests/constants/best-games-list")
const { initialSetup } = require("../tests/hooks/initial-setup")
require("dotenv").config()


test("All the best games are in the list of games", async ({ page })  => {
	await initialSetup(page)

	const mainPage = new MainPage(page)
	const best = new BestPage(page)

	await test.step("User selects Best section", async () => {
		await mainPage.bestGamesSection.click()
		expect(best.categories).toBeVisible()
	})

	await test.step("List of best games should be shown", async () => {
		await mainPage.bestGamesSection.click()
		for (const game of games) {
			const gameLocator = page.locator(`img[alt="${game}"]`)
			await gameLocator.scrollIntoViewIfNeeded()
			expect(gameLocator).toBeVisible({ timeout: 5000 })
		}
	})

	await test.step("There should not be available any other game apart from the best games", async () => {
		const listOfGames = (await page.$$("div[class^=\"CategoryPageContent-listItem-\"]")).length
		const expectedGamesCount = games.length
		expect(listOfGames).toBe(expectedGamesCount)
	})
})
