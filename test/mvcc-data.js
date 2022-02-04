// ============================================================================
// mvccURLParams
// ============================================================================

const mvccURLParams = Object.fromEntries(new URLSearchParams(location.search).entries());

// ============================================================================
// mvccDataReader()
// ============================================================================

function mvccDataReader(url, opts, success_callback, failed_callback) {
	fetch(url, opts)
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
			return success_callback(json);
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

// ============================================================================
// mvccDataTemplate()
// ============================================================================

function mvccDataTemplate(url, opts, el, template_callback, success_callback, failed_callback) {
	fetch(url, opts)
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
				return template_callback(item);
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
