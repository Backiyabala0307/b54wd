let posturls = ["https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/1"];


getposts(posturls)
    .then((posts) => console.log(posts));

function getposts(urls) {
    let result = [];
    for (let url of urls) {
       result. push( fetch(url).then((response) => response.json()));
    }
    return Promise.all(result);
}


