const baseUrl = 'http://localhost:3030/users'

export const login = async (userData) => {
    const res = await fetch(baseUrl + '/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData),

    })

    if(res.ok) {
        return res.json();
    } else {
        throw res.json();
    }
}