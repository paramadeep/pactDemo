import debitCardClient from './debitCardClient'


console.log('Welcome to POS client')


const payByDebitCard = (amount,cardNo) => {
    console.log(`Initiating a payment of ${amount} from card ${cardNo}`)
    return debitCardClient.makePayment(amount,cardNo)
};

payByDebitCard(100,420007)
    .catch(console.error)
