exports.InitialPage = class InitialPage {

	
	constructor(page){
		this.page = page
		this.loginButton = page.locator("button", { hasText: "Sign in" })
		this.agreeCookiesButton = page.getByRole("button", { name: "AGREE"}).nth(1)
	}  

	async goto() {
		await this.page.goto("https://www.arkadium.com/", {waitUntil:"load"})
	}

	async agreeCookies() {
		await this.agreeCookiesButton.click()
	}


}