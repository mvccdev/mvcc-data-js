mvccDataWriter
===============================================================================

Sends a JSON object to a REST API.

Syntax
-------------------------------------------------------------------------------

    mvccDataWriter(url, options, data, success, failure);

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
    // Send the data.
    //
    mvccDataReader("/api/toons", {}, toons,
        success => {

        },
        failure => {

        }
    );
 