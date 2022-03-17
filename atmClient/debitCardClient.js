import axios from 'axios'

const debitCardServicePort = process.env.DEBIT_SERVICE_PORT || 9410

const makePayment = (amount, cardNo) => axios
    .post(`http://localhost:${debitCardServicePort}/pay`, {amount, cardNo}, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        console.log("done a call with")
        console.log({amount, cardNo})
        console.log(`statusCode: ${res.status}`)
        if (res.status == 200) {
            console.log("Successful payment")
        } else {
            throw "Payment Failed"
        }
    })
    .catch(console.error)

export default {makePayment}
