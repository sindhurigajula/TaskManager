export let resp = {
    "TaskId1": {
        desc: "Task Description 1"
    }, 
    "TaskId2": {
        desc: "Task Description 2"
    }, 
    "TaskId3": {
        desc: "Task Description 3"
    }
};

export const get = (url) => {
    const request = new Request(url, {
        credentials: 'include',
        method: 'get',
        headers: {'Access-Control-Allow-Origin': '*'}
    });

    return makeRequest(request);
}

export const post = (url, body) => {
    const request = new Request( url, {
        body: JSON.stringify(body),
        credentials: 'include',
        method: 'post',
        headers: {'content-type': 'application/json'}
    });

    return makeRequest(request);
    // return {
    //     taskId: "TaskId4"
    // }
}

const makeRequest = (request) => {
    return fetch(request, {mode: 'no-cors'})
    .then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            return Promise.reject("Failed to Fetch: " + response.statusText);
        }
    });
}