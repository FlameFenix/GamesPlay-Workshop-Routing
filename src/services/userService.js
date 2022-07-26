const baseUrl = 'http://localhost:3030/users'

export const login = async (userData) => {
    const res = await fetch(baseUrl + '/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData),

    })

    if (res.ok) {
        return res.json();
    } else {
        throw res.json();
    }
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