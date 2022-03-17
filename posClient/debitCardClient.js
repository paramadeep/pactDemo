import axios from 'axios'

const makePayment = (amount, cardNo) => axios
    .post('http://localhost:9410/pay', {amount, cardNo})
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
