
const { test, expect } = require("@playwright/test")
const { MainPage } = require("../pages/main.po")
const { initialSetup } = require("../tests/hooks/initial-setup")
const { prices } = require("../tests/constants/price-gems")
const { ShopPage } = require("../pages/shop.po")
require("dotenv").config()

test("Search - categories are in the search results", async ({ page })  => {
	await initialSetup(page)

	const mainPage = new MainPage(page)
	const shopPage = new ShopPage(page)

	await test.step("User clicks on shop", async () => {
		await mainPage.shop.click()
		await expect(shopPage.gemCardsList).toBeVisible()
	})

	await test.step("Search for category should return the corresponding category icon", async () => {
		const priceArray = []
		const gemLocator = page.locator("div[class^=\"GemCard-value\"]")
		const priceLocator = page.locator("button[class^=\"GemCard-button\"]")
		// const size = gemLocator.count()

		for(let i=0;i<6;i++) {
			const gemValue = await gemLocator.nth(i).textContent() // or textContent() depending on your needs
			const priceValue = await priceLocator.nth(i).textContent() // or textContent()
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