// ============================================================================
// mvccURLParams
// ============================================================================

/**
 * Returns the query string in a JavaScript object.
 *
 * @example
 *
 * console.log(mvccURLParams.id);
 */
const mvccURLParams = Object.fromEntries(new URLSearchParams(location.search).entries());

// ============================================================================
// #mvccJsonReader
// ============================================================================

/**
 * Reads data from JSON results.
 *
 * @example
 *
 * mvccDataReader(url, {},
 *     items => {
 *
 *     },
 *     failure => {
 *     }
 * );
 */
function mvccDataReader(url, opts, success_callback, failed_callback) {
	fetch(url,  opts)
		.then(resp => {
			if(resp.status == 200) {
				return resp.json();
			}

			throw Error(resp.status);
		})
		.then(json => {
			return success_callback(json);
		})
		.catch(resp => {
			failed_callback(resp);
		});
}


// ============================================================================
// #mvccJsonWriter
// ============================================================================

/**
 * Send a JSON object to a web API.
 *
 * @example
 *
 * let data = {name: "Minnie Mouse"};
 *
 * mvccDataWriter(url, {}, data,
 *     success => {
 *
 *     },
 *     failure => {
 *     }
 * );
 */
function mvccDataWriter(url, opts, data, success_callback, failed_callback) {
 	//
	// Build the options.
	//
	opts = Object.assign({}, opts,
		{
			headers: {"Content-Type": "application/json"},
			method: "POST",
			body: JSON.stringify(data),
			credentials: "include"
		}
	);
	//
	// Make the post request.
	//
	fetch(url, opts)
		.then(resp => {
			if(resp.status == 200) {
				return success_callback(resp); //was json
			}

			throw Error(resp.status);
		})
		.catch(resp => {
			failed_callback(resp) || "";
		});
}

// ============================================================================
// #mvccObjectTemplate
// ============================================================================

/**
 * Renders a template from an object.
 *
 * @example
 *
 * let data = [
 *     {
 *         name: "Mickie Mouse"
 *     }
 * ];
 *
 * mvccObjectTemplate(data, document.getElementById("output"),
 *     item => {
 *         return `
 *             <p>
 *                 ${item.name}
 *             </p>
 *         `;
 *     }
 * );
 */
function mvccObjectTemplate(data, el, success_callback) {
 	if(typeof data[Symbol.iterator] === 'function')
	{
		//
		// For object collections
		//
		el.innerHTML = data.map(item => {
			return success_callback(item);
		}).join("");
	}
	else {
		//
		// For single objects.
		//
	 	el.innerHTML = success_callback(data);
	}
}

// ============================================================================
// #mvccJsonTemplate
// ============================================================================

/**
 * Renders a template from JSON results.
 *
 * @example
 *
 * mvccJsonTemplate(url, {}, document.getElementById("output"),
 *     item => {
 *         return `
 *             <p>
 *                 ${item.name}
 *             </p>
 *         `;
 *     },
 *     fail => {
 *     }
 * );
 */
function mvccJsonTemplate(url, opts, el, success_callback, failed_callback) {
	mvccDataReader(url, opts,
		items => {
			mvccObjectTemplate(items, el,
				item => {
					return success_callback(item);
				}
			);
		},
		failed => {
			el.innerHTML = failed_callback(failed) || "";
		}
	);
}

// ============================================================================
// #mvccJsonTemplateExt
// ============================================================================

/**
 * Renders a template from JSON results with an callback for sorting or
 * filtering.
 *
 * @example
 *
 * mvccJsonTemplate(url, {}, document.getElementById("output"),
 *     items => {
 *         return items.filter((item) => {
 *             return item.name.startsWith("A");
 *         });
 *     }
 *     item => {
 *         return `
 *             <p>
 *                 ${item.name}
 *             </p>
 *         `;
 *     },
 *     fail => {
 *     }
 * );
 */
function mvccJsonTemplateExt(url, opts, el, success_callback, template_callback, failed_callback) {
	mvccDataReader(url, opts,
		items => {
			items = success_callback(items) || items;

			mvccObjectTemplate(items, el,
				item => {
					return template_callback(item);
				}
			);
		},
		failed => {
			el.innerHTML = failed_callback(failed) || "";
		}
	);
}
