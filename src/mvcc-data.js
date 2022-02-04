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
 * mvccJsonReader(url, {},
 *     items => {
 *
 *     },
 *     failure => {
 *     }
 * );
 */
function mvccJsonReader(url, opts, success_callback, failed_callback) {
	fetch(url, opts)
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
// #mvccObjectTemplate
// ============================================================================

/**
 * Renders a template from an object.
 *
 * @example
 *
 * mvccObjectTemplate(data, document.getElementById("output"),
 *     items => {
 *         return `
 *             <p>
 *                 ${item.name}
 *             </p>
 *         `;
 *     }
 * );
 */
function mvccObjectTemplate(data, el, success_callback) {
	el.innerHTML = data.map(item => {
		return success_callback(item);
	}).join("");
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
 *     items => {
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
	mvccJsonReader(url, opts,
		items => {
			mvccObjectTemplate(items, el,
				item => {
					return success_callback(item);
				}
			);
		},
		failed => {
			failed_callback(failed);
		}
	);
}
