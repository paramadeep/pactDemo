import accountClient from "./accountClient";

export default function processDebit(amount, accountNo, res) {
    accountClient.debit(amount, accountNo).then(() => {
        const paymentStatus = true;
        res.json({paymentStatus})
    }).catch(() => {
        res.status(500).end()
    })
}
