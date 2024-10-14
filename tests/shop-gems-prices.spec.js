
const { test, expect } = require("@playwright/test")
const { MainPage } = require("../pages/main.po")
const { initialSetup } = require("../helpers/hooks/initial-setup")
const { prices } = require("./constants/price-gems")
const { ShopPage } = require("../pages/shop.po")
require("dotenv").config()
import * as allure from "allure-js-commons"

test.beforeEach(async ({page}, testInfo ) => {
	console.log ("### Starting test '" + testInfo.title + "'")

	//The information bellow is optional
	await allure.feature("Shop Section");
	await allure.owner("AKD");
	await allure.tags("task", "challenge");
	await allure.severity("critical");

	await initialSetup(page)
})

test.afterEach(async ({}, testInfo) => {
	console.log ("### Status of the test: '" + testInfo.title + "' is: " + testInfo.status)
}) 

test("Gems should have correct prices", async ({ page })  => {
	const mainPage = new MainPage(page)
	const shopPage = new ShopPage(page)

	await test.step("User clicks on shop", async () => {
		await mainPage.shop.click()
		await expect(shopPage.gemCardsList).toBeVisible()
	})

	await test.step("Gem should match correctly with the corresponding price", async () => {
		const priceArray = []
		const gemElement = page.locator("div[class^=\"GemCard-value\"]")
		const priceElement = page.locator("button[class^=\"GemCard-button\"]")

		/**
		 * TODO: count the gems in the page in order to get the total of elements
		 * and replace in the counter below
		**/ 

		for(let i=0;i<6;i++) {
			const gemValue = await gemElement.nth(i).textContent() 
			const priceValue = await priceElement.nth(i).textContent()
			const gemObject = {
				gem: gemValue,
				price: priceValue
			}
			priceArray.push(gemObject)
		}

		console.log(priceArray)
		expect(prices).toEqual(priceArray)
	})
})