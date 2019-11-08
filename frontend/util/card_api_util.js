
export const fetchCards = () => {
    return $.ajax({
        method: 'GET',
            url: '/api/cards',
        // error: (err) => 
    })
}