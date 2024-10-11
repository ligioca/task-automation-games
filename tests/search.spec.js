
const { test, expect } = require("@playwright/test")
const { MainPage } = require("../pages/main.po")
const { SearchPage } = require("../pages/search.po")
const { initialSetup } = require("../tests/hooks/initial-setup")
const { categories } = require("../tests/constants/categories-list")
require("dotenv").config()

test("Search - categories are in the search results", async ({ page })  => {
	await initialSetup(page)

	const mainPage = new MainPage(page)
	const searchPage = new SearchPage(page)

	await test.step("User clicks on search", async () => {
		await mainPage.search.click()
		await expect(searchPage.searchInput).toBeVisible()
	})

	await test.step("Search for category should return the corresponding category icon", async () => {
		for (let categorie of categories) {
			await searchPage.searchInput.type(categorie)
			const categorieLocator = page.locator(`//div[contains(@class, "SearchResultList-list")]//div//div//div//div[contains(@class, "Category")]//picture//img[@alt="${categorie}"]`)
			await page.waitForTimeout(700)

			expect(categorieLocator).toBeVisible({ timeout: 5000 })

			try {
				await searchPage.cleanSearchInput.click()
			} catch (e) {
				console.log("There is nothing to be cleaned.")
			}
		}
	})
})