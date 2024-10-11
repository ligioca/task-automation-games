exports.MainPage = class MainPage {
	
	constructor(page){
		this.page = page
		this.mainMenu = this.page.locator(".swiper-slide.swiper-slide-active").first() 
		this.arkadiumFanFavoritesPanel = this.page.locator("a:has-text(\"Arkadium Fan Favorites\")")
		this.newGameReleasesPanel = this.page.locator("a:has-text(\"New Game Release\")")
		this.bestGamesSection = this.page.getByTestId("Best")
		this.search = this.page.locator("button[data-element-description='nav-search-button']")
		this.shop = this.page.locator("button[data-element-description='nav-shop-button']")
	}  
}