// ============================================================================
// mvccURLParams
// ============================================================================

const mvccURLParams = Object.fromEntries(new URLSearchParams(location.search).entries());

// ============================================================================
// mvccDataTemplate()
// ============================================================================

function mvccDataTemplate(url, el, item_callback, failed_callback) {
	fetch(url)
		.then(resp => {
			//
			// Return the json result from the web api.
			//
			if(resp.status == 200) {
				return resp.json();
			}

			//
			// Execute the failed callback if the request failed.
			//
			if(failed_callback) {
				failed_callback(resp);
			}
		})
		.then(json => {
			//
			// Write the template to the document object model.
			//
			el.innerHTML = json.map(item => {
				return item_callback(item);
			}).join("")
		})
		.catch(resp => {
			//
			// Execute the failed callback if the request failed.
			//
			if(failed_callback) {
				failed_callback(resp);
			}
		});
}
