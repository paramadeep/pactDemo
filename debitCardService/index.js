import  express from 'express'

const app = express()
app.use(express.json())

app.post('/pay',(req,res)=>{
    console.log(req.body)
    const paymentStatus = true;
    res.json({paymentStatus})
})

app.listen(9410, ()=> {
    console.log("DebitCard Service is running at port 9410")
})
