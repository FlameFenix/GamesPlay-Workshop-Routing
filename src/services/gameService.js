import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/games'

export const getAll = () => {
    return request.get(baseUrl);
}

export const getOne = (gameId) => {
    return request.get(baseUrl + `${gameId}`)
}

export const createGame = (accessToken, gameData) => {
    return request.post(baseUrl, gameData, accessToken);
}