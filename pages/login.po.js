exports.LoginPage = class LoginPage {
	
	constructor(page){
		 this.page = page
		 this.email = page.locator("input[id='email']")    
		this.password = page.locator("input[id='password']")       
		 this.loginButton = page.locator("button", { hasText: "Sign in" })
         this.agreeButton = page.locator('button:has-text("AGREE")')
	}  

	async goto() {
        await this.page.route('**/*', (route) => {
            const url = route.request().url();
            if (url.includes('ads') || url.includes('tracking') || url.includes('pop-up')) {
              route.abort();  // Block the request
            } else {
              route.continue();  // Allow other requests
            }
          });
		await this.page.goto("https://www.arkadium.com/", {waitUntil:"load"})

        try {
            await this.agreeButton.click()
            // Replace 'selector-for-accept-button' with the actual selector for the "Accept" button
            // await this.page.waitForSelector(' css-47sehv', { timeout: 5000 });
            // await this.page.click(' css-47sehv');  // Click "Accept"
            console.log('Cookies accepted.');
          } catch (e) {
            console.log('No cookies pop-up appeared.');
          }
	}

	async authenticate(email,password){
		await this.email.type(email)
		await this.password.type(password)        
		await Promise.all([
			await this.loginButton.click(),
		 	await this.page.waitForNavigation()
	 ])
		// try{
		// 	await this.page.locator("[data-testid=\"user-avatar\"]"),
		// 	await this.page.locator("button[name='notification-badge-button-title-bar']")
		// }catch{
		// 	const frame = this.page.$$("iframe")[0]
		// 	await frame.locator(".co-button co--primary co--white", { hasText:"Refresh" }).click()
		// 	await this.page.locator("[data-testid=\"user-avatar\"]"),
		// 	await this.page.locator("button[name='notification-badge-button-title-bar']")
		// }       
	}
}