exports.LoginPage = class LoginPage {
	
	constructor(page){
		this.page = page
		this.email = this.page.locator("input[id='email']")    
		this.password = this.page.locator("input[id='password']")  
		this.submitButton = this.page.locator("button[type='submit']")     
	}  

	async authenticate(email,password){
		await this.email.type(email)
		await this.password.type(password)        
		await this.submitButton.click()

		await this.page.waitForNavigation()      
	}
}