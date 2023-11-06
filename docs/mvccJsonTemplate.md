mvccJsonTemplate
===============================================================================

Generates HTML from a JSON file or REST API.

Syntax
-------------------------------------------------------------------------------

    mvccJsonTemplate(url, options, element, item_callback, failure_callback);

Example
-------------------------------------------------------------------------------

**JavaScript**

    mvccJsonTemplate("toons.json", {}, document.getElementById("js-example"),
        item => {
            return `
                <li>${item.lastName}, ${item.firstName}</li>
            `;
        }
        fail => {
            
        }
    );

**HTML**

    <ul id="js-example"></ul>

**JSON**

    [
        {
            "lastName"  : "Mouse",
            "firstName" : "Mickey"
        },
        {
            "lastName"  : "Mouse",
            "firstName" : "Minnie"
        },
        {
            "lastName"  : "Duck",
            "firstName" : "Donald"
        },
        {
            "lastName"  : "Duck",
            "firstName" : "Daisy"
        }
    ]