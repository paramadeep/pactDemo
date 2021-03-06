import {Pact, Publisher} from "@pact-foundation/pact";
import debitCardClient from "../debitCardClient";

process.env.DEBIT_SERVICE_PORT = "2347"

const provider = new Pact({
    consumer: "ATM",
    provider: "DebitCardService",
    port:  2347,
    logLevel: "INFO",

})

const opts = {
    pactBroker: 'http://localhost:8080',
    pactFilesOrDirs: [`./pacts/`],
    consumerVersion: '1',
    tags: 'main'
    // verbose: true,
    // logLevel: 'trace',
};

provider.setup().
then(()=> provider.addInteraction({
    state: "I have an debit card  420007 with millions loaded",
    uponReceiving: "making a payment",
    withRequest: {
        method: "POST",
        path: "/pay",
        body: {
            amount: 100,
            cardNo: 420007
        },
        headers: { Accept: "application/json, text/plain, */*" },
    },
    willRespondWith: {
        status: 200,
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: {
            paymentStatus: true
        },
    },
})).
then(()=> debitCardClient.makePayment(100,420007))
    .then(() => provider.verify())
    .then(()=> provider.finalize())
    .then(()=> new Publisher(opts).publishPacts())
    .catch(console.error)



