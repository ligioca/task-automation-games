
const { test, expect } = require("@playwright/test")
const { MainPage } = require("../pages/main.po")
const { BestPage } = require("../pages/best.po")
const { games } = require("../tests/constants/best-games-list")
const { initialSetup } = require("../helpers/hooks/initial-setup")
require("dotenv").config()
import * as allure from "allure-js-commons"

test.beforeEach(async ({page}, testInfo ) => {
	console.log ("### Starting test '" + testInfo.title + "'")

	//The report information bellow are optional
	await allure.feature("Best Games Section");
	await allure.owner("AKD");
	await allure.tags("task", "challenge");
	await allure.severity("critical");

	await initialSetup(page)
})

test.afterEach(async ({}, testInfo) => {
	console.log ("### Status of the test: '" + testInfo.title + "' is: " + testInfo.status)
}) 


test("All the best games should be in the list of best games", async ({ page })  => {
	const mainPage = new MainPage(page)
	const best = new BestPage(page)

	await test.step("User selects Best section", async () => {
		await mainPage.bestGamesSection.click()
		await expect(best.categories).toBeVisible()
	})

	await test.step("List of best games should be shown", async () => {
		await mainPage.bestGamesSection.click()
		for (const game of games) {
			const gameLocator = page.locator(`img[alt="${game}"]`)
			await gameLocator.scrollIntoViewIfNeeded()
			await expect(gameLocator).toBeVisible({ timeout: 5000 })
		}
	})

	await test.step("There should not be available any other game apart from the best games", async () => {
		const listOfGames = (await page.$$("div[class^=\"CategoryPageContent-listItem-\"]")).length
		const expectedGamesCount = games.length
		expect(listOfGames).toBe(expectedGamesCount)
	})
})