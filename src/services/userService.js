import * as request from './requester'

const baseUrl = 'http://localhost:3030/users'

export const login = async (userData) => {
    let res =  await request.post(`${baseUrl}/login`, userData);
    console.log(res);
}

export const register = async (userData) => {
    const res = await fetch(baseUrl + '/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    const jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }

}

export function setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
}