import {Verifier} from "@pact-foundation/pact";

new Verifier({
    pactBrokerUrl: "http://localhost:8080",
    timeout: 300000,
    providerBaseUrl: "http://localhost:9410",
    provider: 'DebitCardService',
    publishVerificationResult: true,
    consumerVersionSelectors: {
        tag: "main",
        latest: true,
        consumer: "ATM",
    },
    providerVersion: "1",
    verbose: true,
}).verifyProvider()
    .catch(console.error)
