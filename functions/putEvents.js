'use strict';

const EventBridge = require('aws-sdk/clients/eventbridge')

const EVENT_BUS_NAME = process.env.EventBusName

const eventBridge = new EventBridge()

module.exports.handler = async (event) => {

    let body = JSON.parse(event.body)

    //put events to EventBridge
    var params = {
        Entries: [ /* required */
            {
                Detail: JSON.stringify(
                    {
                        vehicleNo: body.vehicleNo,
                        NIC: body.NIC    
                    }
                ),
                DetailType: 'user-signup',
                EventBusName: EVENT_BUS_NAME,
                Source: 'fuel-app'
            },
            /* more items */
        ]
    };

    try {
        let data = await eventBridge.putEvents(params, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else console.log(data);           // successful response
        }).promise();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };

    } catch (error) {
        console.log(error)

    }


    

    
};
