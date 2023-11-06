mvccDataReader
===============================================================================

Read results from a JSON file or REST API.

Syntax
-------------------------------------------------------------------------------

    mvccDataReader(url, options, items_callback, fail_callback);

Example
-------------------------------------------------------------------------------

**JavaScript**

    mvccDataReader("toons.json", {},
        items => {
            alert(items[0].firstName);
        }
        fail => {
            
        }
    );

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