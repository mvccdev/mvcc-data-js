objectTemplate
===============================================================================

Generates HTML from on a JSON object.

Syntax
-------------------------------------------------------------------------------

    mvccObjectTemplate(data, element, item_callback);

Example
-------------------------------------------------------------------------------

**JavaScript**

    //
    // Define the object.
    //
    let toons = [
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
    ];

    //
    // Generate the HTML.
    //
    mvccObjectTemplate(toons, document.getElementById("js-example"),
        item => {
            return `
                <li>${item.lastName}, ${item.firstName}</li>
            `;
        }
    );

**HTML**

    <ul id="js-example"></ul>
 