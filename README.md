# mvcc-data-js

A small JavaScript library to handle data templating.

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

	 mvccDataTemplate("/some_api?id=" mvccURLParams.id, document.getElementById("root"),
		 item => {
			 return `
				<p>
				 	${item.name}
				</p>
			`;
		 },
		 fail => {
			 console.log("The server returned status code: " + fail.status)
		 }
	 );
