
### Description
Serverless app that puts items on Eventbridge EventBus (via lambda or api gw proxy). Eventbus targets an SQS queue which is then processed by lambda handler. DLQ also configured




Create serverless nodejs template app
    
    sls create --template aws-nodejs


curl -X POST https://12ie65a69e.execute-api.eu-west-1.amazonaws.com/dev/generate -d '{ "vehicleNo" : "8787", "NIC" : "wewewe"}'

curl -X POST https://12ie65a69e.execute-api.eu-west-1.amazonaws.com/dev/eventbridge -d '{ "vehicleNo" : "8787", "NIC" : "wewewe"}'