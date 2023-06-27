'use strict';


module.exports.handler = async (event) => {

    let records = event.Records
    console.log("records.." + JSON.stringify(records))
    let batchItemFailures = [];
    if (records.length) {

        for (const record of records) {
            try {
                const parsed = JSON.parse(record.body)
                
                const vehicleNo = parsed.detail.vehicleNo
                if(typeof vehicleNo !== 'string'){
                    throw new Error('VehicleNo must be a string')
                }
                console.log("processed.. " + parsed.detail.vehicleNo)

            } catch (error) {
                batchItemFailures.push({
                    itemIdentifier: record.messageId
                })
            }

        }
    }

    return { batchItemFailures };






};
