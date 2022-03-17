import  express from 'express'
import {getAccountForCard} from "./cardsAccountStore";
import processDebit from './processDebit'

const app = express()
app.use(express.json())

app.post('/pay',(req,res)=>{
    console.log(req)
    let cardNo = req.body.cardNo;
    let amount = req.body.amount;
    console.log(`Processing payments for card ${cardNo} for amount of ${amount}`)
    const accountNo = getAccountForCard(cardNo)
    processDebit(amount, accountNo, res);
})

app.listen(9410, ()=> {
    console.log("DebitCard Service is running at port 9410")
})
