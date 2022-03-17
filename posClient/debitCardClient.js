import axios from 'axios'

const debitCardServicePort = process.env.DEBIT_SERVICE_PORT || 9410

const makePayment = (amount, cardNo) => axios
    .post(`http://localhost:${debitCardServicePort}/pay`, {amount, cardNo})
    .then(res => {
        console.log(`statusCode: ${res.status}`)
        if(res.status == 200){
            console.log("Successful payment")
        } else {
            throw "Payment Failed"
        }
    })
    .catch(console.error)

export default  {makePayment}
