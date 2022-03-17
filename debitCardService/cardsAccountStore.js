const accountCardsStore = {
    "420007": "Acc007",
    "420002": "Acc002"
}

export const getAccountForCard = (card) => {
    return accountCardsStore[card]
}
