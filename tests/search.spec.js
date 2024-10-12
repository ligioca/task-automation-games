
const { test, expect } = require("@playwright/test")
const { MainPage } = require("../pages/main.po")
const { SearchPage } = require("../pages/search.po")
const { initialSetup } = require("../helpers/hooks/initial-setup")
const { categories } = require("../tests/constants/categories-list")
require("dotenv").config()
import * as allure from "allure-js-commons"
import { ContentType } from "allure-js-commons";

test.beforeEach(async ({page}, testInfo ) => {
	console.log ("### Starting test '" + testInfo.title + "'")

	//The report information bellow are optional
	await allure.feature("Search Feature");
	await allure.owner("AKD");
	await allure.tags("task", "challenge");
	await allure.severity("critical");

	await initialSetup(page)
})

test.afterEach(async ({page}, testInfo) => {
	console.log ("### Status of the test: '" + testInfo.title + "' is: " + testInfo.status)
}) 

test("Searching for category should bring the correct category result", async ({ page })  => {
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
			await expect(categorieLocator).toBeVisible({ timeout: 5000 })

			try {
				await searchPage.cleanSearchInput.click()
			} catch (e) {
				console.log("There is nothing to be cleaned.")
			}
		}
	})
})