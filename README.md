# mvcc-data-js

A collection of JavaScript functions for templating.

## Skill Prerequisites

A basic understanding of the following skills are necessary to use this project.

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Tool Dependencies

Install the following tools to use this project in your local development environment.

* [Node.js](https://nodejs.org/)
* [Git](https://git-scm.com/)
* [GitHub Desktop](https://desktop.github.com/)

## Installing

Follow these steps to install this project.

	git clone https://github.com/flex-site-template/mvcc-data.git
	cd mvcc-data
	npm install
	npm build

## Examples

**mvccJsonReader**

Reads data from JSON results.

	mvccJsonReader("/some_api", {},
		items => {
			document.getElementById("output").innerHTML = items[0].name;
		},
		fail => {
			console.log(fail);
		}
	);

**mvccJsonWriter**

Send a JSON object to a web API.

	let data = {name: "Minnie Mouse"};

	mvccJsonWriter(url, {}, data,
		success => {

		},
		failure => {
		}
	);

**mvccObjectTemplate**

Renders a template from an object.

	let data = [
		{
			"name": "Mickey Mouse"
		},
		{
			"name": "Minnie Mouse"
		},
	];

	mvccObjectTemplate(data, "output",
		item => {
			return `
				<p>
				 	${item.name}
				</p>
			`;
		 }
	);

**mvccJsonTemplate**

Renders a template from JSON results.

	mvccJsonTemplate("/some_api", {}, document.getElementById("output"),
		item => {
			return `
				<p>
				 	${item.name}
				</p>
			`;
		},
		fail => {
			 console.log(fail);
		}
	 );

 **mvccURLParams**

 Returns the querystring in an object.

 	mvccJsonTemplate("/some_api" + mvccURLParams.id, {}, document.getElementById("output"),
 		item => {
 			return `
 				<p>
 				 	${item.name}
 				</p>
 			`;
 		},
 		fail => {
 			 console.log(fail);
 		}
 	 );
