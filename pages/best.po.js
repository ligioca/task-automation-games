exports.BestPage = class BestPage {
	
	constructor(page){
		this.page = page
		this.categories = this.page.locator("div[aria-label=\"Categories\"]")
	}  
}