
export const fetchCards = data => {
    return $.ajax({
        method: 'GET',
            url: '/api/cards',
            data
    })
}

export const fetchCard = cardId => {
    return $.ajax({
        method: 'GET',
        url: `/api/cards/${cardId}`,
    })
}

export const fetchRandomCards = numCards => {
    return $.ajax({
        url: `/api/cards/`,
        data: {limit: numCards }
    })
}