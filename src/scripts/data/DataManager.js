export const getPosts = () => {

    return fetch("http://localhost:8088/posts?_sort=id&_order=desc")
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse;
    })
}

