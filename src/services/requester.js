const request = async (method, url, data, accessToken) => {
    try {
        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(url);
        } else if (accessToken) {
            buildRequest = fetch(url, {
                method,
                headers: {
                    'X-Authorization': accessToken,
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data)
            })
        } else {
            buildRequest = fetch(url, {
                method,
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data)
            })
        }

        const response = await buildRequest;

        const result = await response.json();

        return result;

    } catch (error) {
        alert(error);
    }

}

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const patch = request.bind({}, 'PATCH');
export const del = request.bind({}, 'DELETE');