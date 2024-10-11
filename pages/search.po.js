exports.SearchPage = class SearchPage {
	
	constructor(page){
		this.page = page
		this.searchInput = this.page.locator("input[data-element-description='search-games']")
		this.originalsImg = this.page.locator("img[alt='Originals']")
		this.originalsResult = this.page.locator("a[href='/free-online-games/originals/']")
		this.cleanSearchInput = this.page.locator("button[aria-label='clear input field']")
	}  
}