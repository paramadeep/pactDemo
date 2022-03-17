import axios from "axios";

const debit = (amount,accountNo) =>  axios
    .post('http://localhost:9411/debit', {amount, accountNo})
    .then(res => {
        console.log(`statusCode: ${res.status}`)
        if(res.status == 200){
            console.log("Successful Debit")
        } else {
            throw "Payment Failed"
        }
    })
    .catch(console.error)

export default {debit}
