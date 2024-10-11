exports.ShopPage = class ShopPage {
	
	constructor(page){
		this.page = page
		this.gemCardsList = this.page.locator("div[class^='GemsCardsList-gemsCardsList']")
	}  
}