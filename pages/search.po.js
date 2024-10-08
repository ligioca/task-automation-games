exports.SearchPage = class SearchPage {
	
	constructor(page){
		this.page = page
        this.searchInput = this.page.locator("input[data-element-description='search-games']")
	}  
}