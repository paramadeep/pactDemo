import {Verifier} from "@pact-foundation/pact";
import {re} from "@babel/core/lib/vendor/import-meta-resolve";

new Verifier({
    pactBrokerUrl: "http://localhost:8080",
    timeout: 300000,
    providerBaseUrl: "http://localhost:9410",
    provider: 'DebitCardService',
    logLevel: "debug",
    publishVerificationResult: true,
    consumerVersionSelectors: {
        tag: "main",
        latest: true,
        consumer: "ATM",
    },
    providerVersion: "1",
    requestFilter: (req, res, next) => {
        console.log('Printing req')
        console.log(req)
        next()
    },
    // verbose: true,
    stateHandlers: {
        'I have an debit card  420007 with millions loaded': () => {
            console.log("Please setup a debit card  420007 with millions loaded here")
        }
    }
}).verifyProvider()
    .catch(console.error)
