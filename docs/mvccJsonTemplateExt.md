mvccJsonTemplateExt
===============================================================================

Adds an additional argument to sort or filter JSON results.

Syntax
-------------------------------------------------------------------------------

    mvccJsonTemplate(url, options, element, items_callback, item_callback, failure_callback);

Example
-------------------------------------------------------------------------------

**JavaScript**

    mvccJsonTemplate("toons.json", {}, document.getElementById("js-example"),
        items => {
            return items.filter((item) => {
                return item.lastName == "Duck";
            });
        }
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