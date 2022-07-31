const baseUrl = 'http://localhost:3030/data/games'

export const getAll = () => {
    return fetch(baseUrl)
        .then(res => res.json())
}

export const getOne = (gameId) => {
    return fetch(baseUrl + `/${gameId}`)
        .then(res => res.json())
}

export const createGame = (accessToken ,gameData) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(gameData)
    })
}