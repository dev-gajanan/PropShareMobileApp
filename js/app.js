if("serviceWorker" in navigator) {
	navigator.serviceWorker.register("sw.js").then(registration => {
		console.log("Service Worker Registered");
		console.log(registration);
	}).catch(err => {
		console.log("Service Worker Registration Failed");
		console.log(err);
	})
} else{

}