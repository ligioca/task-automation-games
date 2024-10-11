
async function ignoreAds(page) {
	//block adds
	await page.route("**/*", (route) => {
		const url = route.request().url()
		if (url.includes("ads") || url.includes("tracking") || url.includes("pop-up")) {
			route.abort()  // Block the request
		} else {
			route.continue()  // Allow other requests
		}
	})
}

module.exports = { ignoreAds }
