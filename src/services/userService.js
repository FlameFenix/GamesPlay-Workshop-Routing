import * as request from './requester'

const baseUrl = 'http://localhost:3030/users'

export const login = async (userData) => {
    let res = await request.post(`${baseUrl}/login`, userData);

    return res;
}

export const register = async (userData) => {
    let res = await request.post(`${baseUrl}/register`, userData);

    return res;
}

export const logout = async (accessToken) => {
    try {
        const res = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export function setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
}