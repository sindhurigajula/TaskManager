export const get = (url) => {
    const request = new Request(url, {
        credentials: 'include',
        method: 'get'
    });

    // return makeRequest(request);
    return ["Task1", "Task2", "Task3"];
}

const makeRequest = (request) => {
    return fetch(request)
    .then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            return Promise.reject("Failed to Fetch: " + response.statusText);
        }
    });
}