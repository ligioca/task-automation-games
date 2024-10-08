
const { test, expect } = require("@playwright/test")
const { InitialPage } = require("../pages/initial.po")
const { LoginPage } = require("../pages/login.po")
const { MainPage } = require("../pages/main.po")
const { ignoreAds } = require("../helpers/ads-handler")
const { SearchPage } = require("../pages/search.po")

test("Search - categories are in the search results", async ({ page })  => {
    const initialPage = new InitialPage(page)
	const loginPage = new LoginPage(page)
    const mainPage = new MainPage(page)
    const search = new SearchPage(page)
	
	await test.step("User login", async () => {
        await ignoreAds(page)

		await initialPage.goto()
        await initialPage.agreeCookies()

        await initialPage.loginButton.click()

        await expect(loginPage.password).toBeVisible()
        await expect(loginPage.email).toBeVisible()

        await loginPage.authenticate("testtaskuser@arkadium.com", "Test123123")

        await expect(mainPage.mainMenu).toBeVisible()
        await expect(mainPage.arkadiumFanFavoritesPanel).toBeVisible()
        await expect(mainPage.newGameReleasesPanel).toBeVisible()

	})

    await test.step("User clicks on search", async () => {
        await mainPage.search.click()
        await expect(search.searchInput).toBeVisible()
    })

    await test.step("Search for categorie should return the categorie icon", async () => {
        // take each categorie, search it and check if the result contains the correct categorie
    })
})