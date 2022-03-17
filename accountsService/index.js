import  express from 'express'

const app = express()
app.use(express.json())

app.post('/debit',(req,res)=>{
    console.log(`Making debit for account ${req.body.accountNo} for an amount of ${req.body.amount}`)
    const debitStatus = true;
    res.json({debitStatus})
})

app.listen(9411, ()=> {
    console.log("Accounts Service is running at port 9411")
})
