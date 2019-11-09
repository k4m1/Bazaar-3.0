
export const fetchCards = data => {
    return $.ajax({
        method: 'GET',
            url: '/api/cards',
            data: {data}
        // error: (err) => 
    })
}

export const fetchCard = (cardId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/cards/${cardId}`,
    })
}