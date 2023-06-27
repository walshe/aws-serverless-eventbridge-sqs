'use strict';


module.exports.handler = async (event) => {

    let records = event.Records
    let batchItemFailures = [];
    if (records.length) {

        for (const record in records) {
            try {
                const parsed = JSON.parse(record.body)
                console.log("processed " + parsed.detail.vehicleNo)
            } catch (error) {
                batchItemFailures.push({
                    itemIdentifier: record.messageId
                })
            }

        }
    }

    return { batchItemFailures };






};
